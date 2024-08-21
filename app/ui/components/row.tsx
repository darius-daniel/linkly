import { Link } from '@prisma/client';
import { ChevronDown, Copy } from 'lucide-react';
import Image from 'next/image';

export default function Row({ data }: { data: Link }) {
  const domain = new URL(data.originalLink).hostname;
  return (
    <tr className="flex flex-row items-center justify-between">
      <td className="flex flex-row justify-between items-center p-2 w-full lg:w-1/4">
        <span className="flex flex-row gap-1 items-center">
          <a href="https://www.twitter.com/tweets/8erelCoihu/" target="_blank">
            {data.shortLink.slice(0, 23)}...
          </a>
          <Copy
            size={30}
            className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray"
          />
        </span>
        <ChevronDown
          size={30}
          className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray lg:hidden"
        />
      </td>
      <td className="max-lg:hidden w-1/4">
        <a
          href={data.originalLink}
          className="flex flex-row gap-3 items-center"
        >
          <Image
            src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
            alt="Original Link Logo"
            width={32}
            height={32}
          />
          {data.originalLink.slice(0, 28)}...
        </a>
      </td>
      <td className="max-lg:hidden w-1/6">{data.clicks}</td>
      <td className="max-lg:hidden w-1/6">
        {data.status ? 'Active' : 'Inactive'}
      </td>
      <td className="max-lg:hidden w-1/6">
        {new Date().toISOString().split('T')[0]}
      </td>
    </tr>
  );
}
