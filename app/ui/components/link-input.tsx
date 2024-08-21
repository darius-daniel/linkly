import { ArrowRight, Link } from 'lucide-react';

export default function LinkInput() {
  return (
    <form action="" className="flex flex-row w-full relative">
      <Link className="absolute left-6 top-6" />
      <input
        type="text"
        name="originalLink"
        id=""
        placeholder="Enter the link here"
        className="rounded-full bg-custom-dark-gray py-5 ps-16 w-full border-4 border-custom-gray"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bg-custom-blue rounded-full p-4 hover:shadow-custom-blue hover:shadow-2xl"
      >
        <ArrowRight className="sm:hidden" />
        <span className="max-sm:hidden">Shorten Now!</span>
      </button>
    </form>
  );
}
