'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { getUser } from '@/app/lib/actions';

export default function Example() {
  const initialState = {
    message: '',
  };
  const [state, formAction] = useFormState(getUser, initialState);
  return (
    <div className="flex min-h-screen text-custom-lite flex-1 flex-col px-6 py-12 min-w-80">
      <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href="/">
          <Image
            alt="Your Company"
            src="../../linkly_main.svg"
            className="mx-auto"
            width={116.75}
            height={40}
          />
        </Link>
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={formAction} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 ps-5 py-1.5 shadow-sm ring-1 bg-transparent ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      {state?.message && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <span>{state?.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
