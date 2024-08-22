'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';
import { schema } from './zod';

type State = { message: string };

export async function getUser(prevState: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please enter a valid email address',
    };
  }

  const { email } = validatedFields.data;
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) redirect('/ctx/register/');

  redirect('/ctx/login/');
}
