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
    if (!process.env.SESSION_SECRET) {
      console.error('[Decrypt] SESSION_SECRET is not set');
      return null;
    }
    
    if (!session) {
      console.log('[Decrypt] No session provided');
      return null;
    }

    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.error('[Decrypt] Failed to verify session:', error);
    console.error('[Decrypt] Session string length:', session?.length);
    console.error('[Decrypt] First 50 chars of session:', session?.substring(0, 50));
    return null
  }
}


export async function createSession(user: User) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  try {
    console.log('[CreateSession] Creating database session for user:', user.id);
    // 1. Create a session in the database
    const newSession = await prisma.session.create({
      data: {
        user_id: user.id,
        expires_at: expiresAt,
        session_token: nanoid(32),
      }
    })
    console.log('[CreateSession] Database session created');

    // 2. Encrypt the session ID
    console.log('[CreateSession] Encrypting session');
    const encryptedSession = await encrypt({
      userId: newSession.user_id,
      sessionId: newSession.session_token,
      expiresAt: newSession.expires_at
    })
    console.log('[CreateSession] Session encrypted');

    // 3. Store the session in cookies for optimistic auth checks
    console.log('[CreateSession] Setting cookie');
    const cookieStore = await cookies();

    cookieStore.set('linklySession', encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: expiresAt,
      sameSite: 'lax', 
      path: '/',
    })
    console.log('[CreateSession] Cookie set successfully');
  } catch (error) {
    console.error('[CreateSession] Error creating session:', error);
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
