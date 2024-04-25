import Icon from '@/components/icon/Icon';
import Link from 'next/link';
import ColorMode from './ColorMode';

export default function LandingHeader() {
  return (
    <header className="z-50 fixed top-0 w-full bg-transparent border-b border-transparent">
      <div className="container flex h-16 items-center max-w-[88rem] mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link
            scroll={false}
            href="/"
            className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
          >
            <div className="flex flex-col">
              <h1 className="text-black dark:text-white">Ho Joon</h1>
            </div>
          </Link>
          <div className="flex items-center ">
            <div className="rounded-full px-5 py-2 text-xs ring-2 ring-inset ring-cyan-500/50 tracking-wide">
              Frontend Developer HoJoon
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1 items-center justify-end gap-3 sm:gap-3 md:justify-end">
          <Icon name="github" href="https://github.com/HOJOON07" />
          <Icon name="instagram" href="https://www.instagram.com/hzoxjcnv/" />
          <ColorMode />
        </div>
      </div>
    </header>
  );
}
