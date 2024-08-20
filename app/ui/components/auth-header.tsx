import Link from 'next/link';
import { sfProDisplayHeavy } from '../fonts';

export default function Header() {
  return (
    <header className={`${sfProDisplayHeavy.className} pt-2 text-4xl`}>
      <Link
        href="/"
        className="bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent"
      >
        Linkly
      </Link>
    </header>
  );
}
