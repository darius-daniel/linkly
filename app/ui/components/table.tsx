'use client';

import { useEffect, useState } from 'react';
import Row from './row';
import { getLinks } from '@/app/lib/actions';
import { Link } from '@prisma/client';
import Pagination from './pagination';
import { TableProps } from './types';

export default function Table({ user }: TableProps) {
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
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Short Link</th>
              <th>Original Link</th>
              <th>Clicks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <Row data={row} key={idx} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={{ value: currentPage, setValue: setCurrentPage }}
        user={user}
      />
    </>
  );
}
