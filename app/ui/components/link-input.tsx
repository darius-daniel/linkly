'use client';

import { createShortLink } from '@/app/lib/actions';
import { ArrowRight, Link } from 'lucide-react';
import { useFormState } from 'react-dom';
import ErrorToast from './toasts/error';
import { usePathname } from 'next/navigation';

export default function LinkInput() {
  const pathname = usePathname();
  const initialState = {
    message: '',
  };
  const [state, formAction] = useFormState(
    createShortLink.bind(null, pathname),
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-row w-full relative">
      <Link className="absolute left-6 top-6" size={16} />
      <input
        type="url"
        name="url"
        id="url"
        placeholder="Enter the link here"
        className="rounded-full bg-custom-dark-gray py-4 ps-12 pe-16 w-full border-4 border-custom-gray"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 text-custom-lite bg-indigo-800 rounded-full p-3 hover:bg-indigo-700"
      >
        <ArrowRight className="sm:hidden" />
        <span className="max-sm:hidden">Shorten Now!</span>
      </button>
      {state?.errors && <ErrorToast message={state.errors.url[0]} />}
    </form>
  );
}
