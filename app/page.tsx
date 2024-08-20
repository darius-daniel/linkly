// import Image from 'next/image';
import {
  sfProDisplayBold,
  sfProDisplayHeavy,
  sfProDisplayRegular,
} from './ui/fonts';
import Table from './ui/components/table';
import Header from './ui/components/header';
import LinkInput from './ui/components/link-input';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`${sfProDisplayRegular.className} px-5 pb-20 min-w-80`}>
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
          <p>
            You can create{' '}
            <span className={`${sfProDisplayBold.className} text-custom-pink`}>
              05
            </span>{' '}
            more links.{' '}
            <a
              href="/sign-up"
              className={`${sfProDisplayBold.className} underline`}
            >
              Register Now
            </a>{' '}
            to enjoy Unlimited usage
          </p>
        </div>
      </section>
      <section className="relative mt-16 text-custom-lite text-center">
        <Table />
        <p className="backdrop-blur-sm absolute top-12 left-0 w-full py-6 text-sm">
          <Link href="/auth/sign-up" className="underline text-custom-blue">
            Register now
          </Link>{' '}
          to enjoy unlimited history
        </p>
      </section>
    </main>
  );
}
