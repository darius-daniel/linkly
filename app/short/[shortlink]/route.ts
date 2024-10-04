import prisma from '@/app/lib/prisma';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const shortlink = request.url.split('/short/')[1];
  let href: string;

  try {
    const url = await prisma.link.update({
      where: { short_link: shortlink },
      data: { clicks: { increment: 1 } },
    });
    href = url ? url.original_link : '/';
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred', status: 500 });
  }

  redirect(href);
}
