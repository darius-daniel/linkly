'use client';

import { LogOut, Menu, Settings } from 'lucide-react';
import { useEffect } from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { sfProDisplayHeavy, sfProDisplaySemiBold } from '../ui/fonts';
import LinkInput from '../ui/components/link-input';
import Table from '../ui/components/table';

export default function Page() {
  const { isLoading, user } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading && user) console.log(user);
  }, [isLoading]);

  return (
    <div className="min-h-screen pb-28">
      <header
        className={`${sfProDisplayHeavy.className} flex flex-row justify-between items-center px-2.5 py-2 text-4xl sm:w-11/12 sm:mx-auto`}
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
