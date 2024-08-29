import { OctagonAlert, X } from 'lucide-react';
import { useState } from 'react';

export default function WarningToast({ message }: { message: string }) {
  const [showing, setShowing] = useState(true);
  return (
    <div
      className={showing ? 'toast toast-center' : 'toast toast-center hidden'}
    >
      <div className="alert alert-warning bg-transparent text-warning">
        <OctagonAlert />
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
