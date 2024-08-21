import { Link } from '@prisma/client';

export interface TableProps {
  data?: Array<Link>;
}

export interface RowProps {
  data: Link;
}
