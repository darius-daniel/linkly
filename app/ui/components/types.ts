import { Link } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export interface LinkInputProps {
  userId?: string;
}

export interface TableProps {
  userId: string;
}


export type SignUpFormState =
  | {
    errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined;

export type SignInFormState =
  | {
    errors?: {
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined;

export type CreateShortLinkState =
  | {
    errors?: {
      url?: string[]
    }
    message?: string
  }
  | undefined;

export interface TableProps {
  data?: Array<Link>;
}

export interface RowProps {
  data: Link;
}

export type Page = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};
