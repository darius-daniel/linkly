import prisma from '@/app/lib/prisma';
import { redirect, usePathname } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET() {
  const pathname = usePathname();
  let href: string;

  try {
    const url = await prisma.link.update({
      where: { short_link: pathname },
      data: { clicks: { increment: 1 } },
    });
    href = url ? url.original_link : '/';
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred', status: 500 });
  }

  redirect(href);
}
