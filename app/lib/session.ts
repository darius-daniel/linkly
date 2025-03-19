import { cookies } from 'next/headers'
import prisma from '@/app/lib/prisma'
import { User } from "@prisma/client";
import { nanoid } from 'nanoid';

import 'server-only'
import { JWTPayload, SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET;
if (!secretKey || secretKey.length === 0) {
  throw new Error('SESSION_SECRET environment variable is not set or is empty');
}
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    if (!process.env.SESSION_SECRET) {
      return null;
    }
    
    if (!session) {
      return null;
    }

    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    return null
  }
}

export async function createSession(user: User) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  try {
    const newSession = await prisma.session.create({
      data: {
        user_id: user.id,
        expires_at: expiresAt,
        session_token: nanoid(32),
      }
    })

    const encryptedSession = await encrypt({
      userId: newSession.user_id,
      sessionId: newSession.session_token,
      expiresAt: newSession.expires_at
    })

    const cookieStore = await cookies();

    cookieStore.set('linklySession', encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    })
  } catch (error) {
    throw error;
  }
}

export async function updateSession() {
  const session = (await cookies()).get('linklySession')?.value
  const payload = await decrypt(session)

  if (!session || !payload) {
    return null
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies()

  cookieStore.set('linklySession', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expires,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('linklySession');
}
