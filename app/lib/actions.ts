'use server';

import prisma from './prisma';
// import { linkSchema } from './zod';
import { generateRandomString } from './utils';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function createUser() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
  const dbUser = await prisma.user.findFirst({ where: { id: kindeUser?.id } });

  if (!dbUser) {
    const properties = kindeUser?.properties;

    delete kindeUser?.properties;
    const newUser = {
      ...kindeUser,
      ...properties,
    };

    return await prisma.user.create({ data: newUser });
  }

  return dbUser;
}

export type State =
  | { errors: { url?: string[] | undefined }; message?: undefined }
  | { message: string; errors?: undefined }
  | undefined;

export async function createShortLink(prevState: State, formData: FormData) {
  console.log(formData);
  // const validatedFields = linkSchema.safeParse(formData);

  // if (!validatedFields.success)
  //   return { errors: validatedFields.error.flatten().fieldErrors };

  const url = formData.get('url');
  if (url) {
    try {
      new URL(url.toString());
    } catch (error) {
      return { errors: { url: ['Please enter a valid URL'] } };
    }
  } else {
    return { errors: { url: ['Field cannot be blank'] } };
  }

  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  const user = await prisma.user.findFirst({
    where: { id: kindeUser?.id },
  });

  if (user) {
    const data = {
      original_link: url.toString(),
      short_link: generateRandomString(),
      status: true,
      clicks: 0,
      creator_id: user?.id,
    };
    try {
      await prisma.link.create({ data });
      return { message: 'Success!' };
    } catch (error) {
      return { message: 'Failed' };
    }
  }
}

export async function deleteShortLink(formData: FormData) {}

export async function getLinks(userId: string, currentPage: number) {
  const maxLinksPerPage = 10;
  return await prisma.link.findMany({
    where: { id: userId },
    skip: (currentPage - 1) * maxLinksPerPage,
    take: maxLinksPerPage,
  });
}
