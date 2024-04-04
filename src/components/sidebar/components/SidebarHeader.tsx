import Link from 'next/link';

export default function SidebarHeader() {
  return (
    <div className="h-20">
      <Link
        href="/"
        className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white"
      >
        <span className="font-[Gluten-Semi] text-cyan-500 text-[2.6rem] align-middle">
          H
        </span>
        <span className="ml-3 font-semibold transition-all duration-200 ease-in-out text-xl text-emerald-400">
          Ho.Blog
        </span>
      </Link>
    </div>
  );
}
