'use client'

import { Link } from '@prisma/client';
import Clipboard from './clipboard';
import Image from 'next/image';

export default function Row({ data }: { data: Link }) {
  const newUrl = new URL(data?.original_link);

  return (
    <>
      <tr className="flex flex-col lg:flex-row items-center justify-between">
        <td className="flex flex-row justify-between items-center p-2 w-full">
          <span className="flex flex-row gap-1 items-center">
            <a href={newUrl.href} target="_blank">
              {data.short_link}
            </a>
            <Clipboard
              text={`https://linkly-three.vercel.app/short/${data.short_link}`}
            />
          </span>
        </td>

        <td>
          <a
            href={data.original_link}
            className="flex flex-row gap-3 items-center"
          >
            <Image
              src={`https://favicon.yandex.net/favicon/${newUrl.hostname}`}
              alt="Original Link Logo"
              width={16}
              height={16}
            />
            {data.original_link.slice(0, 12)}...
          </a>
        </td>
        <td className="max-lg:hidden ps-1">{data.clicks}</td>
        <td
          className={`max-lg:hidden ${data.is_active ? 'text-success' : 'text-error'}`}
        >
          {data.is_active ? 'Active' : 'Inactive'}
        </td>
      </tr>
    </>
  );
}
