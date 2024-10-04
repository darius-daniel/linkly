import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function Clipboard({ text }: { text: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setComponent(tick);
      setTimeout(() => {
        setComponent(copy);
      }, 2000);
    });
  };

  const copy = (
    <Copy
      size={30}
      className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray"
      onClick={copyToClipboard}
    />
  );

  const tick = (
    <Check size={30} className="p-2 rounded-full bg-custom-gray text-success" />
  );

  const [component, setComponent] = useState(copy);

  return <div className="flex flex-row gap-2 items-center">{component}</div>;
}
