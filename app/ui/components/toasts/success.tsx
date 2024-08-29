import { CircleCheckBig, X } from 'lucide-react';
import { useState } from 'react';

export default function SuccessToast({ message }: { message: string }) {
  const [showing, setShowing] = useState(true);
  return (
    <div
      className={showing ? 'toast toast-center' : 'toast toast-center hidden'}
    >
      <div className="alert alert-success bg-transparent text-success">
        <CircleCheckBig />
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
