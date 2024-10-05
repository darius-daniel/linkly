import { Link } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

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
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'jjdieqej',
    original_link: 'https://www.facebook.com',
    clicks: 9933,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.twitter.com',
    clicks: 23,
    status: false,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'b3dadg9s',
    original_link: 'https://www.twitter.com/tweets/8erelCoihu/',
    clicks: 1213,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.youtube.com/watch?v=8J7ZmH0lXuk',
    clicks: 4183,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.adventuresinwanderlust.com/',
    clicks: 243,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://vimeo.com/625257654',
    clicks: 32123,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://unsplash.com/photos/2KjNwOzFfVQ',
    clicks: 538,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '1',
    short_link: 'q212weds',
    original_link: 'https://www.twitter.com',
    clicks: 23,
    status: true,
    creator_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
];
