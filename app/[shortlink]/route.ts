import prisma from '@/app/lib/prisma';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const pathname = request.url.split('/')[3];
  try {
    const url = await prisma.link.update({
      where: { short_link: pathname },
      data: { clicks: { increment: 1 } },
    });

    if (url) redirect(url.original_link);
  } catch (error) {}

  redirect('/');
}
