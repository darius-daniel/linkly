'use server';

import prisma from './prisma';
import { linkSchema } from './zod';
import { generateRandomString } from './utils';
import { User } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function createUser(user: User) {
  const dbUser = await prisma.user.findFirst({ where: { kindeId: user.id } });
  const newUser = { ...user, kindeId: user.id };

  if (!dbUser) {
    return await prisma.user.create({ data: { ...newUser } });
  }

  return dbUser;
}

export type State =
  | { errors: { url?: string[] | undefined }; message?: undefined }
  | { message: string; errors?: undefined }
  | undefined;

export async function createShortLink(prevState: State, formData: FormData) {
  const validatedFields = linkSchema.safeParse(formData);

  if (!validatedFields.success)
    return { errors: validatedFields.error.flatten().fieldErrors };

  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  const user = await prisma.user.findFirst({
    where: { kindeId: kindeUser?.id },
  });

  if (user) {
    const data = {
      originalLink: validatedFields.data.url,
      shortLink: generateRandomString(),
      status: true,
      clicks: 0,
      creatorId: user?.id,
    };
    try {
      await prisma.link.create({ data });
      return { message: 'Success!' };
    } catch (error) {
      return { message: 'Failed' };
    }
  }
}

// export async function deleteShortLink(formData: FormData) {}
