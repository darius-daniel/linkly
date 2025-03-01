'use client';

import { LogIn } from 'lucide-react';
import { sfProDisplayHeavy, sfProDisplaySemiBold } from '../fonts';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={`${sfProDisplayHeavy.className} flex flex-row justify-between items-center pt-1 text-4xl sm:w-11/12 sm:mx-auto`}
    >
      <span className="bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent">
        Linkly
      </span>
      <Link
        href="/api/auth/sign-in"
        className={`btn ${sfProDisplaySemiBold.className} btn text-xl bg-custom-dark-gray text-white hover:bg-custom-blue hover:text-white border border-white rounded-full`}
      >
        Login <LogIn />
      </Link>
    </header>
  );
}
