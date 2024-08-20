'use client';

import { LoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function Submit({ text }: { text: string }) {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-custom-blue px-3 py-1.5 text-sm leading-6 hover:shadow-2xl hover:shadow-custom-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {status.pending ? <LoaderCircle /> : text}
    </button>
  );
}
