'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';
import { generateRandomString } from './utils';
import { SignUpFormSchema, State } from './definitions';
import bcrypt from 'bcryptjs';

export async function signUp(prevState: State, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten() };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  try {
    const saltLength = 10;
    const passwordHash = await bcrypt.hash(password, saltLength);

    return await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: passwordHash,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: 'Signing up failed!' };
  }
}

export async function createShortLink(
  pathname: string,
  prevState: State,
  formData: FormData,
) {}

// export async function deleteShortLink(formData: FormData) {}

export async function getLinks(userId: string, currentPage: number) {
  const maxLinksPerPage = 10;
  return await prisma.link.findMany({
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
