import { CircleCheckBig, X } from 'lucide-react';
import { useState } from 'react';

export default function SuccessToast({ message }: { message: string }) {
  const [showing, setShowing] = useState(true);
  return (
    <div className={showing ? 'toast toast-center max-sm:min-w-60' : 'hidden'}>
      <div className="alert alert-success bg-transparent text-success flex flex-row justify-center">
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
