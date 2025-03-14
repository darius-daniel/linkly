'use server';

import prisma from './prisma';
import { generateRandomString } from './utils';
import { CreateShortLinkSchema, CreateShortLinkState, SignInFormSchema, SignInFormState, SignUpFormSchema, SignUpFormState } from './definitions';
import bcrypt from 'bcryptjs';
import { createSession } from './session';
import { redirect } from 'next/navigation';

export async function getUser(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function signUp(prevState: SignUpFormState, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const saltLength = 10;
    const passwordHash = await bcrypt.hash(password, saltLength);


    const user = await prisma.user.create({
      data: {
        name,
        password: passwordHash,
        email,
      },
    });

    await createSession(user);
    return redirect(`/dashboard/${user.id}`);
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return { errors: { email: ["Email is already taken"] } }
    }

    console.error("Sign up error:", error);
    return { message: 'Signing up failed!' };
  }
}

export async function signIn(prevState: SignInFormState, formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  const { email, password } = validatedFields.data;
  try {
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return { errors: { email: ["Invalid email or password"] } }
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return { errors: { password: ["Invalid email or password"] } }
    }

    await createSession(user);
    return redirect(`/dashboard/${user.id}`)
  } catch (error: any) {
    if (error.digest && error.digest.startsWith('NEXT_REDIRECT')) {
      const [, , url] = error.digest.split('/');
      return redirect(`/dashboard/${url}`);
    }
    console.error("Sign in error:", error);
    return { message: "Sign in failed! Please try again later." }
  }
}


export async function createShortLink(
  pathname: string,
  prevState: CreateShortLinkState,
  formData: FormData,
) {
  const validatedFields = CreateShortLinkSchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { url } = validatedFields.data;
  try {
    const user = await prisma.user.findUnique({ where: { id: pathname.split('/')[2] } });
    if (!user) {
      return { errors: { url: ["User not found"] } };
    }

    await prisma.link.create({
      data: {
        original_link: url,
        short_link: generateRandomString(6),
        creator_id: user.id,
      },
    });
    return { message: "Short link created successfully" };
  } catch (error) {
    console.error("Create short link error:", error);
    return { errors: { url: ["Failed to create short link"] } };
  }
}

// export async function deleteShortLink(formData: FormData) {}

export async function getLinks(userId: string, currentPage: number) {
  const maxLinksPerPage = 10;
  return prisma.link.findMany({
    where: { creator_id: userId },
    skip: (currentPage - 1) * maxLinksPerPage,
    take: maxLinksPerPage,
    orderBy: { created_at: 'desc' },
  });
}

export async function getShortLinkLastPageNum(
  userId: string,
  maxLinksPerPage: number,
) {
  const linkTotal = await prisma.link.count({
    where: { creator_id: userId },
  });

  return Math.ceil(linkTotal / maxLinksPerPage);
}
