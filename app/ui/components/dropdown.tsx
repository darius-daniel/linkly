import { Link as LinkSchema } from '@prisma/client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface DropdownProps {
  data: LinkSchema;
  state: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
}

export default function Dropdown({ data, state }: DropdownProps) {
  const chevronDown = (
    <ChevronDown
      size={30}
      className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray"
      onClick={() => state.setValue(true)}
    />
  );

  const chevronUp = (
    <ChevronUp
      size={30}
      className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray"
      onClick={() => state.setValue(false)}
    />
  );

  return (
    <details className="dropdown lg:hidden">
      <summary className="btn m-1">
        {state.value ? chevronUp : chevronDown}
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          Short Link: <Link href={data.short_link}>{data.short_link}</Link>
        </li>
        <li>Original Link: {data.original_link}</li>
        <li>Clicks: {data.clicks}</li>
        <li>Status: {data.status ? 'Active' : 'Inactive'}</li>
        <li>
          Date: {data.created_at?.getDate().toString().padStart(2, '0')}-
          {data.created_at && data.created_at?.getMonth() + 1}.
          {data.created_at?.getFullYear()}
        </li>
      </ul>
    </details>
  );
}
