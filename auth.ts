import NextAuth from 'next-auth';
import Resend from 'next-auth/providers/resend';
import prisma from './app/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      normalizeIdentifier(identifier: string): string {
        // Get the first two elements only,
        // separated by `@` from user input.
        let [local, domain] = identifier.toLowerCase().trim().split('@');

        // You can also throw an error, which will redirect the user
        // to the sign-in page with error=EmailSignin in the URL
        if (identifier.split('@').length > 2) {
          throw new Error('Only one email allowed');
        }

        // The part before "@" can contain a ","
        // but we remove it on the domain part
        domain = domain.split(',')[0];
        return `${local}@${domain}`;
      },
    }),
  ],
});
