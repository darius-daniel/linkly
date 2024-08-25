'use client';

import { LogOut, Menu, Settings } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
  sfProDisplayHeavy,
  sfProDisplayRegular,
  sfProDisplaySemiBold,
} from '../ui/fonts';
import LinkInput from '../ui/components/link-input';
import Table from '../ui/components/table';
import prisma from '../lib/prisma';
import { saveUser } from '../lib/actions';

export default function Page() {
  const { isLoading, user } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading && user) {
      console.log(user);
    }
  }, [isLoading, user]);

  return (
    <div className="min-h-screen pb-28">
      <header
        className={`${sfProDisplayHeavy.className} flex flex-row justify-between md:justify-evenly items-center px-2.5 py-2 text-4xl`}
      >
        <span className="bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent">
          Linkly
        </span>
        <details className="dropdown dropdown-end md:hidden">
          <summary className="btn m-1 bg-transparent hover:bg-custom-blue hover:text-white border-0">
            <Menu size="28px" />
          </summary>
          <ul
            className={`${sfProDisplaySemiBold.className} menu dropdown-content bg-transparent rounded-box w-auto z-[1] p-2 shadow`}
          >
            <li className="hover:bg-custom-dark-gray">
              <a>
                <Settings /> Settings
              </a>
            </li>
            <li className="hover:bg-custom-dark-gray">
              <LogoutLink href="/api/auth/logout">
                <LogOut /> Log out
              </LogoutLink>
            </li>
          </ul>
        </details>
        <div
          className={`${sfProDisplaySemiBold.className} flex flex-row items-center text-base max-md:hidden w-5/6`}
        >
          <LinkInput />
          <details className="dropdown dropdown-end">
            <summary className="btn bg-transparent hover:bg-custom-dark-gray hover:text-white border-0 size-fit py-1.5 ms-6">
              <Image
                src="../../avatars/kidaha-12.svg"
                width={32}
                height={32}
                alt="avatar"
              />{' '}
              John Doe
            </summary>
            <ul
              className={`${sfProDisplaySemiBold.className} menu dropdown-content bg-transparent rounded-box w-auto z-[1] p-2 shadow`}
            >
              <li className="hover:bg-custom-dark-gray">
                <a>
                  <Settings /> Settings
                </a>
              </li>
              <li className="hover:bg-custom-dark-gray">
                <LogoutLink href="/api/auth/logout">
                  <LogOut /> Log out
                </LogoutLink>
              </li>
            </ul>
          </details>
        </div>
      </header>
      <section className="pt-28 flex flex-col gap-5 w-11/12 mx-auto md:hidden">
        <LinkInput />
        <div className="mt-10">
          <Table />
        </div>
      </section>
    </div>
  );
}
