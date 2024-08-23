'use client';

import { LogIn } from 'lucide-react';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { sfProDisplayHeavy, sfProDisplaySemiBold } from '../fonts';

export default function Header() {
  return (
    <header
      className={`${sfProDisplayHeavy.className} flex flex-row justify-between items-center pt-1 text-4xl sm:w-11/12 sm:mx-auto`}
    >
      <span className="bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent">
        Linkly
      </span>
      <button
        className={`${sfProDisplaySemiBold.className} text-xl bg-custom-dark-gray px-6 pt-2 pb-3 rounded-full border border-custom-gray hover:bg-custom-gray`}
        // onClick={() => router.push('/authenticate')}
      >
        <LoginLink>
          <span className="flex flex-row gap-2 items-center">
            Login <LogIn />
          </span>
        </LoginLink>
      </button>
    </header>
  );
}
