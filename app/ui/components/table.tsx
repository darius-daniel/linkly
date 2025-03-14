'use client';

import { useEffect, useState } from 'react';
import Row from './row';
import { getLinks, getUser } from '@/app/lib/actions';
import { Link, User } from '@prisma/client';
import Pagination from './pagination';
import { usePathname } from 'next/navigation';  

export default function Table() {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const userId = pathname.split('/')[2];
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState<Array<Link>>([]);

  useEffect(() => {
    getUser(userId).then((user) => {
      setUser(user);
    });
    
    if (user && pathname.startsWith('/dashboard')) {
      getLinks(userId, currentPage).then((rows) => {
        setRows(rows);
      });
    }
  }, [currentPage, user, userId, pathname]);

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
