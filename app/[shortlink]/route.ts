import prisma from '@/app/lib/prisma';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const pathname = request.url.split('/')[3];
  const url = await prisma.link.findFirst({
    where: { shortLink: pathname },
  });

  if (url) redirect(url.originalLink);

  redirect('/');
}
