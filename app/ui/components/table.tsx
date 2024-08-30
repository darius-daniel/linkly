'use client';

import { sfProDisplayBold } from '../fonts';
import Row from './row';

export default function Table() {
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
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorId: '1',
            id: '1',
          }}
        />
        <Row
          data={{
            shortLink: 'https://linkly.com/Bn41...',
            originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
            clicks: 101,
            status: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorId: '1',
            id: '1',
          }}
        />
        <Row
          data={{
            shortLink: 'https://linkly.com/Bn41...',
            originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
            clicks: 47,
            status: true,
            createdAt: new Date(),
            creatorId: '1',
            updatedAt: new Date(),
            id: '1',
          }}
        />
        <Row
          data={{
            shortLink: 'https://linkly.com/Bn41...',
            originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
            clicks: 1998,
            status: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorId: '1',
            id: '1',
          }}
        />
      </tbody>
    </table>
  );
}
