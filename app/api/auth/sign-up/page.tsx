'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { signUp } from '@/app/lib/actions';
import { sfProDisplayBold } from '@/app/ui/fonts';

export default function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const initialState = { message: '' };
  const [state, formAction, pending] = useActionState(signUp, initialState);

  return (
    <div className="flex flex-col gap-2 justify-center align-center py-10 mx-auto">
      <a
        href="/"
        className={`${sfProDisplayBold.className} bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent self-center mb-4 text-4xl`}
      >
        Linkly
      </a>

      <p className="self-center text-3xl font-bold">Create your account</p>
      <form
        className="flex flex-col gap-2 justify-center align-center w-[400px] p-10 pt-2 mx-auto text-sm"
        action={formAction}
      >
        <label htmlFor="last-name" className="flex flex-col gap-2">
          Full Name:
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs bg-custom-dark-gray-transparent focus:border-custom-blue focus:outline-0 text-sm"
            id="name"
            name='name'
            required
          />
          {state?.errors?.name && (
            <p className="text-custom-pink">{state.errors.name}</p>
          )}
        </label>

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
            onChange={(e) => setPassword(e.target.value)}
          />
          {state?.errors?.password && (
            <p className="text-custom-pink">{state.errors.password}</p>
          )}
        </label>
        <label htmlFor="first-name" className="flex flex-col gap-2">
          Confirm Password:
          <input
            type="text"
            placeholder="Re-enter your password"
            className={`input input-bordered w-full max-w-xs bg-custom-dark-gray-transparent ${password !== confirmPassword && 'border-custom-pink'
              } focus:border-custom-blue focus:outline-0 text-sm`}
            id="confirm-password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password !== confirmPassword && (
            <p className="text-custom-pink">Passwords do not match</p>
          )}
        </label>

        <button
          type="submit"
          className="btn bg-custom-blue text-white text-base font-normal disabled:bg-blue-900 hover:bg-blue-900 mt-4"
          disabled={password !== confirmPassword}
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
        Already have an account?{' '}
        <Link
          href="/api/auth/sign-in"
          className="text-custom-blue font-bold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
