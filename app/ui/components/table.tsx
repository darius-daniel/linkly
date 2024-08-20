import { ChevronDown, Copy } from 'lucide-react';
import { sfProDisplayBold } from '../fonts';
import { TableProps } from '@/app/lib/definitions';
import Row from './row';
import { Link } from '@prisma/client';

export default function Table({ data }: { data: Array<Link> }) {
  return (
    <table className="lg:w-4/5 lg:mx-auto flex flex-col divide-y-4 divide-custom-black gap text-sm text-custom-lite">
      <thead
        className={`${sfProDisplayBold.className} py-3 px-4 bg-custom-dark-gray rounded-t-2xl`}
      >
        <tr className="flex flex-row justify-between">
          <td className="lg:hidden">Shorten Links</td>
          <td className="max-lg:hidden w-1/4">Short Link</td>
          <td className="max-lg:hidden w-1/4">Original Link</td>
          <td className="max-lg:hidden w-1/6">Clicks</td>
          <td className="max-lg:hidden w-1/6">Status</td>
          <td className="max-lg:hidden w-1/6">Date</td>
        </tr>
      </thead>
      <tbody className="flex flex-col divide-y-4 divide-custom-black bg-custom-dark-gray-transparent px-2">
        <Row
          data={{
            shortLink: 'https://linkly.com/Bn41...',
            originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
            clicks: 1,
            status: true,
            created_at: new Date(),
            creatorId: '1',
            id: '1',
          }}
        />
      </tbody>
    </table>
  );
}
