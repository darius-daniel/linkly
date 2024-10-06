import { getShortLinkLastPageNum } from '@/app/lib/actions';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PaginationProps {
  user: {
    id: string;
    email: string | null;
    family_name: string | null;
    given_name: string | null;
    picture: string | null;
  } | null;
  currentPage: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  };
}

export default function Pagination({ currentPage, user }: PaginationProps) {
  const [lastPageNum, setLastPageNum] = useState<number | undefined>();

  useEffect(() => {
    if (user) {
      getShortLinkLastPageNum(user.id, 10).then((lastPage) => {
        setLastPageNum(lastPage);
      });
    }
  }, [currentPage.value, user]);

  return (
    <div className="bg-transparent justify-center mt-1 text-center">
      <div className="join bg-custom-dark-gray size-fit">
        <button
          className="join-item btn btn-sm bg-inherit text-custom-lite hover:text-custom-dark-gray border-0"
          onClick={() => currentPage.setValue(currentPage.value - 1)}
          disabled={currentPage.value - 1 < 1}
        >
          <ChevronsLeft size={16} />
        </button>
        <button className="join-item btn btn-sm btn-active bg-custom-dark-gray text-custom-lite border-0">
          {`Page ${currentPage.value}`}
        </button>
        <button
          className="join-item btn btn-sm bg-inherit text-custom-lite hover:text-custom-dark-gray border-0"
          onClick={() => currentPage.setValue(currentPage.value + 1)}
          disabled={
            lastPageNum === undefined || currentPage.value + 1 > lastPageNum
          }
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
}
