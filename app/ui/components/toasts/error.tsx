import { ShieldAlert, X } from 'lucide-react';
import { useState } from 'react';

export default function ErrorToast({ message }: { message: string }) {
  const [showing, setShowing] = useState(true);
  return (
    <div
      className={showing ? 'toast toast-center' : 'toast toast-center hidden'}
    >
      <div className="alert alert-error bg-transparent text-error">
        <ShieldAlert />
        <span>{message}</span>
        <X
          size={12}
          onClick={() => setShowing(false)}
          className="hover:text-custom-lite"
        />
      </div>
    </div>
  );
}
