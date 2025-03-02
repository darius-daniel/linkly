'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from '@/app/lib/actions';
import { sfProDisplayBold } from '@/app/ui/fonts'
import { useActionState } from 'react';

export default function SignIn() {
  const [state, formAction] = useActionState(signIn, undefined);

  return (
    <div className="flex flex-col gap-2 justify-center align-center mx-auto py-10">
      <a
        href="/"
        className={`${sfProDisplayBold.className} bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent self-center mb-4 text-4xl`}
      >
        Linkly
      </a>

      <p className="self-center text-3xl font-bold">Sign in to your account</p>
      <form className="flex flex-col gap-2 justify-center align-center w-[400px] p-10 pt-2 mx-auto text-sm" action={formAction}>
        <label htmlFor="last-name" className="flex flex-col gap-2">
          Email:
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full max-w-xs bg-custom-dark-gray-transparent focus:border-custom-blue focus:outline-0 text-sm"
            id="email"
            name='email'
            required
          />
          {state?.errors?.email && (
            <p className="text-custom-pink">{state.errors.email}</p>
          )}
        </label>
        <label htmlFor="last-name" className="flex flex-col gap-2">
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs bg-custom-dark-gray-transparent focus:border-custom-blue focus:outline-0 text-sm"
            id="password"
            name='password'
            required
          />
          {state?.errors?.password && (
            <p className="text-custom-pink">{state.errors.password}</p>
          )}
        </label>

        <button
          type="submit"
          className="btn bg-custom-blue text-white text-base font-normal disabled:bg-blue-900 hover:bg-blue-900 mt-4"
        >
          Sign up
        </button>

        <div className="divider">Or continue with</div>

        <a
          href="/"
          className="btn bg-custom-dark-gray text-base font-normal hover:bg-custom-blue hover:text-white"
        >
          <Image src="/google.svg" alt="Google Logo" width={24} height={24} />
          Google
        </a>
      </form>
      <p className="self-center">
        Don't have an account?{' '}
        <Link
          href="/api/auth/sign-up"
          className="text-custom-blue font-bold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
