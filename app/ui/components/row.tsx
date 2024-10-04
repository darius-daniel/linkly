import { Link } from '@prisma/client';
import { ChevronDown } from 'lucide-react';
import Clipboard from './clipboard';
import Image from 'next/image';

export default function Row({ data }: { data: Link }) {
  const newUrl = new URL(data?.original_link);

  const creationDate = data.created_at?.getDate().toString().padStart(2, '0');
  const creationMonth =
    data.created_at &&
    (data.created_at?.getMonth() + 1).toString().padStart(2, '0');
  const creationYear = data.created_at?.getFullYear();
  const creationTimeStamp = `${creationDate}-${creationMonth}-${creationYear}`;

  const currentDomain =
    process.env.NEXT_PUBLIC_VERCEL_URL || 'https://linkly-three.vercel.app';

  return (
    <tr className="flex flex-row items-center justify-between">
      <td className="flex flex-row justify-between items-center p-2 w-full lg:w-1/4">
        <span className="flex flex-row gap-1 items-center">
          <a href={newUrl.href} target="_blank">
            {data.short_link}
          </a>
          <Clipboard text={`${currentDomain}/short/${data.short_link}`} />
        </span>
        <ChevronDown
          size={30}
          className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray lg:hidden"
        />
      </td>
      <td className="max-lg:hidden w-1/4">
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
          {data.original_link.slice(0, 24)}...
        </a>
      </td>
      <td className="max-lg:hidden w-1/6 ps-1">{data.clicks}</td>
      <td className="max-lg:hidden w-1/6">
        {data.status ? 'Active' : 'Inactive'}
      </td>
      <td className="max-lg:hidden w-1/6">{creationTimeStamp}</td>
    </tr>
  );
}
