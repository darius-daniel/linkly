'use client';

import { createShortLink } from '@/app/lib/actions';
import { ArrowRight, Link } from 'lucide-react';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import Dots from './loaders/dots';
import ErrorToast from './toasts/error';

export default function LinkInput() {
  const initialState = {
    // errors: {},
    message: '',
  };
  const [state, formAction, pending] = useFormState(
    createShortLink,
    initialState,
  );
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 2 * 1000);
  }, [pending]);

  return (
    <form action={formAction} className="flex flex-row w-full relative">
      <Link className="absolute left-6 top-7" size={16} />
      <input
        type="url"
        name="url"
        id="url"
        placeholder="Enter the link here"
        className="rounded-full bg-custom-dark-gray py-5 ps-12 pe-16 w-full border-4 border-custom-gray"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bg-indigo-800 rounded-full p-4 hover:bg-indigo-700"
      >
        {pending ? (
          <Dots />
        ) : (
          <>
            <ArrowRight className="sm:hidden" />
            <span className="max-sm:hidden">Shorten Now!</span>
          </>
        )}
      </button>
      {state?.errors?.url[0] && showToast && (
        <ErrorToast message={state.errors.url[0]} />
      )}
    </form>
  );
}
