'use server';

import prisma from './prisma';
import { linkSchema } from './zod';
import { generateRandomString } from './utils';
import { User } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function createUser(user: User) {
  const dbUser = await prisma.user.findFirst({ where: { kinde_id: user.id } });
  const newUser = { ...user, kinde_id: user.id };

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
    where: { kinde_id: kindeUser?.id },
  });

  if (user) {
    const data = {
      original_link: validatedFields.data.url,
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

// export async function deleteShortLink(formData: FormData) {}
