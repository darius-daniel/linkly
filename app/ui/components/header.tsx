'use client';

import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { sfProDisplayHeavy, sfProDisplaySemiBold } from '../fonts';

export default function Header() {
  const router = useRouter();

  return (
    <header
      className={`${sfProDisplayHeavy.className} flex flex-row justify-between items-center pt-6 text-4xl`}
    >
      <span className="bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent">
        Linkly
      </span>
      <div className="flex flex-row gap-5">
        <button
          className={`${sfProDisplaySemiBold.className} text-xl bg-custom-dark-gray px-6 py-3 rounded-full border border-custom-gray hover:bg-custom-gray`}
          onClick={() => router.push('/api/auth/signup')}
        >
          <span className="flex flex-row gap-2 items-center">
            Login <LogIn />
          </span>
        </button>
        <button
          className={`${sfProDisplaySemiBold.className} text-xl bg-custom-blue px-6 py-3 rounded-full border border-custom-gray hover:shadow-xl hover:shadow-custom-blue max-md:hidden`}
          onClick={() => router.push('/api/auth/login')}
        >
          <span className="flex flex-row gap-2 items-center">
            Register Now!
          </span>
        </button>
      </div>
    </header>
  );
}
