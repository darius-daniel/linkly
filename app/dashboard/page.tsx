'use client';

import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
  sfProDisplayHeavy,
  sfProDisplayRegular,
  sfProDisplaySemiBold,
} from '@/app/ui/fonts';
import LinkInput from '@/app/ui/components/link-input';
import Table from '@/app/ui/components/table';
import { createUser } from '../lib/actions';

export default function Page() {
  const { isLoading, user: authUser } = useKindeBrowserClient();
  const [user, setUser] = useState(authUser);

  useEffect(() => {
    if (!isLoading && authUser) {
      const saveUser = async () => {
        const newUser = await createUser({
          ...authUser,
          kinde_id: authUser.id,
        });
        setUser(newUser);
      };

      saveUser();
    }
  }, [isLoading, authUser]);

  return (
    <div className="min-h-screen pb-28">
      <header
        className={`${sfProDisplayHeavy.className} flex flex-row justify-between md:justify-evenly items-center px-2.5 py-2 text-4xl`}
      >
        <span className="flex-none me-6 bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent">
          Linkly
        </span>
        <div
          className={`${sfProDisplayRegular.className} flex-auto flex flex-row items-center text-base max-md:hidden`}
        >
          <LinkInput />
        </div>
        <details className="dropdown dropdown-end ms-3">
          <summary className="btn bg-transparent hover:bg-custom-dark-gray hover:text-white size-fit border-0 py-1.5 mx-auto">
            <Image
              src="../../avatars/kidaha-12.svg"
              width={32}
              height={32}
              alt="avatar"
            />{' '}
            {user?.given_name ? user.given_name : 'John Doe'}
          </summary>
          <ul
            className={`${sfProDisplaySemiBold.className} menu dropdown-content bg-transparent rounded-box z-[1] p-2 shadow`}
          >
            <li className="hover:bg-custom-dark-gray">
              <LogoutLink href="/api/auth/logout">
                <LogOut /> Log out
              </LogoutLink>
            </li>
          </ul>
        </details>
      </header>
      <section className="mt-28 flex flex-col gap-5 mx-auto">
        <div className="md:hidden w-4/5 mx-auto">
          <LinkInput />
        </div>
        <div className="mt-10 mx-auto w-11/12 md:5/6">
          <Table />
        </div>
      </section>
    </div>
  );
}
