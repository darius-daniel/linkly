import { Link } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

export interface TableProps {
  data?: Array<Link>;
}

export interface RowProps {
  data: Link;
}

export type Page = { value: number; set: Dispatch<SetStateAction<number>> };
