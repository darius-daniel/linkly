import { sfProDisplayBold, sfProDisplayHeavy } from './ui/fonts';
import Header from './ui/components/header';
import LinkInput from './ui/components/link-input';
import Link from 'next/link';
import { Metadata } from 'next';
import DummyTable from './ui/components/dummy-table';

export const metadata: Metadata = {
  title: 'Linkly—Shorten Your Long Links',
};

export default function Home() {
  return (
    <main className="px-5 pb-20 min-w-80">
      <Header />
      <section className="pt-20 flex flex-col gap-5 lg:w-3/5 lg:mx-auto">
        <div className="w-4/5 mx-auto">
          <p
            className={`${sfProDisplayHeavy.className} w-5/6 mx-auto text-center leading-tight text-4xl bg-gradient-to-r from-custom-pink via-custom-purple via-19% to-custom-blue to-100% bg-clip-text text-transparent`}
          >
            Shorten Your Loooong Links :{')'}
          </p>
          <p className="mt-2 text-center leading-6 text-custom-lite text-base">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
        </div>
        <LinkInput />
        <div className="w-4/5 mx-auto text-center text-custom-lite text-sm leading-5">
          <p className={`${sfProDisplayBold.className}`}>
            You can create <span className="text-custom-pink">05</span> more
            links.{' '}
            <a href="/sign-up" className="underline">
              Register Now
            </a>{' '}
            to enjoy Unlimited usage
          </p>
        </div>
      </section>
      <section className="relative mt-16 text-custom-lite text-center">
        <DummyTable />
        <p className="backdrop-blur-sm absolute bottom-4 left-0 w-full py-4 text-sm">
          <Link
            href="/api/auth/register"
            className="underline text-custom-blue"
          >
            Register now
          </Link>{' '}
          to enjoy unlimited history
        </p>
      </section>
    </main>
  );
}
