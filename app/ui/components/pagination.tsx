'use client';

import { Page } from '@/app/lib/definitions';
import { createArrayFromRange } from '@/app/lib/utils';

export default function Pagination({ currentPage }: { currentPage: Page }) {
  let start;
  let stop;

  if (currentPage.value <= 4) {
    start = 1;
    stop = currentPage.value;
  } else {
    start = currentPage.value - 1;
    stop = currentPage.value + 2;
  }

  const arrayOfPageNumbers = createArrayFromRange(start, stop);
  console.log(arrayOfPageNumbers);

  return (
    <div className="join bg-custom-dark-gray justify-end">
      <button className="join-item btn bg-inherit">1</button>
      <button className="join-item btn btn-active">2</button>
      <button className="join-item btn bg-inherit">3</button>
      <button className="join-item btn bg-inherit">4</button>
    </div>
  );
}
