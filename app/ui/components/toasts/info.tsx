import { Info, X } from 'lucide-react';
import { useState } from 'react';

export default function InfoToast({ message }: { message: string }) {
  const [showing, setShowing] = useState(true);
  return (
    <div className={showing ? 'toast toast-center max-sm:min-w-60' : 'hidden'}>
      <div className="alert alert-info bg-transparent text-custom-blue flex flex-row justify-center">
        <Info />
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
