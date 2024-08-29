'use client';

import { createShortLink } from '@/app/lib/actions';
import { ArrowRight, Link } from 'lucide-react';
import { useFormState } from 'react-dom';
import WarningToast from './toasts/warning';
import { useEffect, useState } from 'react';

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
        className="rounded-full bg-custom-dark-gray py-5 ps-12 w-full border-4 border-custom-gray"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bg-custom-blue rounded-full p-4 hover:shadow-custom-blue hover:shadow-2xl"
      >
        <ArrowRight className="sm:hidden" />
        <span className="max-sm:hidden">Shorten Now!</span>
      </button>
      {showToast && (
        <WarningToast
          message={state?.message ? state?.message : 'Testing the toast'}
        />
      )}
    </form>
  );
}
