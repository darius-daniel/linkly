import { Link as LinkSchema } from '@prisma/client';
import Link from 'next/link';

interface DropdownProps {
  data: LinkSchema;
}

export default function Dropdown({ data }: DropdownProps) {
  const creationDate = data.created_at?.getDate().toString().padStart(2, '0');
  const creationMonth =
    data.created_at &&
    (data.created_at?.getMonth() + 1).toString().padStart(2, '0');
  const creationYear = data.created_at?.getFullYear();
  const creationTimeStamp = `${creationDate}-${creationMonth}-${creationYear}`;

  return (
    <td className="bg-transparent p-4 w-full text-left lg:hidden">
      <p>
        <span className="font-bold text-orange-500">Original Link:</span>{' '}
        <Link
          href={`${data.original_link}`}
          className="underline hover:text-primary"
        >
          {data.original_link}
        </Link>
      </p>
      <p>
        <span className="font-bold text-info">Status:</span>{' '}
        <span className={`${data.status ? 'text-success' : 'text-error'}`}>
          {data.status ? 'Active' : 'Inactive'}
        </span>
      </p>
      <p>
        <span className="font-bold text-yellow-500">Clicks:</span> {data.clicks}
      </p>
      <p>
        <span className="font-bold text-lime-600">Date:</span>{' '}
        {creationTimeStamp}
      </p>
    </td>
  );
}
