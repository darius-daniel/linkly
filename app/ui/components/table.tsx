'use client';

import { useEffect, useState } from 'react';
import { sfProDisplayBold } from '../fonts';
import Row from './row';
import { getLinks, getShortLinkLastPageNum } from '@/app/lib/actions';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Link } from '@prisma/client';

import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react';

export default function Table() {
  const { user } = useKindeBrowserClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState<Array<Link>>([]);
  const [lastPageNum, setLastPageNum] = useState<number | undefined>();

  useEffect(() => {
    async () => {
      if (user) {
        const rows = await getLinks(user?.id, currentPage);
        console.log('Rows: ', rows);
        setRows(rows);
        const lastPageNum = await getShortLinkLastPageNum(user.id, 10);
        setLastPageNum(lastPageNum);
      }
    };
  }, [currentPage, user]);
  return (
    <div>
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
          {rows.map((row, idx) => (
            <Row data={row} key={idx} />
          ))}
        </tbody>
      </table>
      <div className="bg-transparent w-full justify-center mt-1 text-center">
        <div className="join bg-custom-dark-gray size-fit">
          <button
            className="join-item btn bg-inherit"
            onClick={() => setCurrentPage(currentPage - 5)}
            disabled={currentPage - 5 < 1}
          >
            <ChevronsLeft />
          </button>
          <button
            className="join-item btn bg-inherit"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage - 1 < 1}
          >
            <ChevronLeft />
          </button>
          <button className="join-item btn btn-active">{`${currentPage} of ${lastPageNum}`}</button>
          <button
            className="join-item btn bg-inherit"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight />
          </button>
          <button
            className="join-item btn bg-inherit"
            onClick={() => setCurrentPage(currentPage + 5)}
          >
            <ChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
}
