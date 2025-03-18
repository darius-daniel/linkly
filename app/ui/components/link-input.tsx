'use client';

import { createShortLink } from '@/app/lib/actions';
import { ArrowRight, Link } from 'lucide-react';
import { useActionState } from 'react';
import { LinkInputProps } from './types';

export default function LinkInput({ user }: LinkInputProps) {
  const initialState = {
    message: '',
  };
  const [state, formAction] = useActionState(
    createShortLink.bind(null, user.id),
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-row relative">
      <Link className="absolute left-4 top-4" size={16} />
      <label className="input input-bordered w-full focus:border focus:border-custom-blue hover:outline-none flex items-center ps-12 rounded-full relative">
        <input type="text" className="grow" placeholder="Enter your link" name="url" />
        <button
          type="submit"
          className="btn bg-custom-blue hover:bg-blue-900 opacity-70 text-nowrap rounded-full text-white relative left-4"
        >
          <span className="hidden lg:block">Shorten Link</span>
          <ArrowRight className="lg:hidden" />
        </button>
        {state?.error && <p className="text-custom-pink text-sm">{state.error.url}</p>}
        {state?.message && <p className="text-custom-pink text-sm">{state.message}</p>}
      </label>
    </form>
  );
}
