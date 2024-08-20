import { Link, User } from '@prisma/client';

export interface TableProps {
  data?: Array<Link>;
}

export interface RowProps {
  data: Link;
}

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    password: string;
    created_at: Date;
    updated_at: Date;
  }
}
