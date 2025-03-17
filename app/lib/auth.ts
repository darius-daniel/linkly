import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decrypt } from './session';
import prisma from './prisma';

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get('linklySession')?.value;
  const payload = await decrypt(session);

  if (!payload?.userId) {
    redirect('/sign-in');
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId as string },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });

  if (!user) {
    redirect('/sign-in');
  }

  return user;
}
