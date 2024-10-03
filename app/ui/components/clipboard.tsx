import React, { useState } from 'react';
import { Copy } from 'lucide-react';

export default function Clipboard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <Copy
        size={30}
        className="p-2 rounded-full bg-custom-gray hover:bg-custom-lite hover:text-custom-dark-gray"
        onClick={copyToClipboard}
      />
      {copied && <span className="text-accent">Copied to clipboard</span>}
    </div>
  );
}
