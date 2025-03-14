import { sfProDisplaySemiBold } from '@/app/ui/fonts';
import LinkInput from '@/app/ui/components/link-input';
import Table from '@/app/ui/components/table';
import Image from 'next/image';

export default function Page() {

  return (
    <div className="min-h-screen pb-28">
      <div className="navbar bg-transparent shadow-sm">
        <div className="flex-1">
          <a className={`${sfProDisplaySemiBold.className} btn btn-ghost text-3xl bg-gradient-to-r from-custom-pink via-custom-purple via-65% to-custom-blue to-80% bg-clip-text text-transparent`}>
            Linkly
          </a>
        </div>
        <div className="flex gap-2">
          <div className="hidden md:block">
            <LinkInput />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-28 flex flex-col gap-5 mx-auto">
        <div className="md:hidden w-4/5 mx-auto">
          <LinkInput />
        </div>
        <div className="mt-10 mx-auto w-11/12 md:5/6">
          <Table />
        </div>
      </section>
    </div>
  );
}
