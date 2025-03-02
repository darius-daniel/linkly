import { Link } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

export interface TableProps {
  data?: Array<Link>;
}

export interface RowProps {
  data: Link;
}

export type Page = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

export const dummyData: Array<Link> = [
  {
    id: '1',
    short_link: 'cdfdad89',
    original_link: 'https://www.google.com',
    clicks: 1023,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'jjdieqej',
    original_link: 'https://www.facebook.com',
    clicks: 9933,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.twitter.com',
    clicks: 23,
    is_active: false,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'b3dadg9s',
    original_link: 'https://www.twitter.com/tweets/8erelCoihu/',
    clicks: 1213,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.youtube.com/watch?v=8J7ZmH0lXuk',
    clicks: 4183,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.adventuresinwanderlust.com/',
    clicks: 243,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://vimeo.com/625257654',
    clicks: 32123,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://unsplash.com/photos/2KjNwOzFfVQ',
    clicks: 538,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.twitter.com',
    clicks: 23,
    is_active: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export type SignUpFormState =
  | {
    errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password should be at least 8 characters long' })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter.',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Password must contain at least one special character',
    })
    .trim(),
});
