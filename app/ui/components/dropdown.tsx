import { Link as LinkSchema } from '@prisma/client';
import Link from 'next/link';

interface DropdownProps {
  data: LinkSchema;
}

export default function Dropdown({ data }: DropdownProps) {
  return (
    <details className="dropdown">
      <summary className="btn m-1">open or close</summary>
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
