import prisma from "@/app/lib/prisma";
import { decrypt, deleteSession } from "@/app/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = 'force-static'

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('linklySession')?.value;
  const payload = await decrypt(session);

  console.log(typeof payload?.sessionId)
  console.log(payload?.sessionId)

  if (!payload || !payload.sessionId || typeof payload.sessionId !== 'string') {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await prisma.session.deleteMany({ where: { session_token: payload.sessionId } })
  await deleteSession();
  redirect('/');
}
