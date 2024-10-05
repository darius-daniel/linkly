'use client';

import { useEffect, useState } from 'react';
import { sfProDisplayBold } from '../fonts';
import Row from './row';
import { getLinks } from '@/app/lib/actions';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Link } from '@prisma/client';
import Pagination from './pagination';

export default function Table() {
  const { user } = useKindeBrowserClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState<Array<Link>>([]);

  useEffect(() => {
    if (user) {
      getLinks(user.id, currentPage).then((rows) => {
        setRows(rows);
      });
    }
  }, [currentPage, user]);

  return (
    <>
      <table className="lg:w-4/5 lg:mx-auto flex flex-col divide-y-4 divide-custom-black gap text-xs text-custom-lite">
        <thead
          className={`${sfProDisplayBold.className} py-3 px-4 bg-custom-dark-gray rounded-t-2xl text-sm`}
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
          {rows.map((row, idx) => (
            <Row data={row} key={idx} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={{ value: currentPage, setValue: setCurrentPage }}
        user={user}
      />
    </>
  );
}
