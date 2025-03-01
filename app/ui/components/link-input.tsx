'use client';

import { createShortLink } from '@/app/lib/actions';
import { ArrowRight, Link } from 'lucide-react';
import { useActionState } from 'react';
import ErrorToast from './toasts/error';
import { usePathname } from 'next/navigation';

export default function LinkInput() {
  const pathname = usePathname();
  const initialState = {
    message: '',
  };
  const [state, formAction, pending] = useActionState(
    createShortLink.bind(null, pathname),
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-row w-full relative">
      <Link className="absolute left-4 top-4" size={16} />
      <label className="input input-bordered focus:border focus:border-custom-blue hover:outline-none flex items-center w-full ps-12 rounded-full relative">
        <input type="text" className="grow" placeholder="Enter your link" />
        <button
          type="submit"
          className="btn bg-custom-blue hover:bg-blue-900 opacity-70 text-nowrap rounded-full text-white relative left-4"
        >
          <span className="hidden lg:block">Shorten Link</span>
          <ArrowRight className="lg:hidden" />
        </button>
      </label>
      {state?.errors && <p>{state.errors?.url}</p>}
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}
