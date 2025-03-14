import { cookies } from 'next/headers'
import prisma from '@/app/lib/prisma'
import { User } from "@prisma/client";
import { nanoid } from 'nanoid';

import 'server-only'
import { JWTPayload, SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET
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
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
    return null
  }
}


export async function createSession(user: User) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  // 1. Create a session in the database
  const newSession = await prisma.session.create({
    data: {
      user_id: user.id,
      expires_at: expiresAt,
      session_token: nanoid(32),
    }
  })

  // 2. Encrypt the session ID
  const encryptedSession = await encrypt({
    userId: newSession.user_id,
    sessionId: newSession.session_token,
    expiresAt: newSession.expires_at
  })

  // 3. Store the session in cookies for optimistic auth checks
  const cookieStore = await cookies();

  cookieStore.set('linklySession', encryptedSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
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
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  })
}
