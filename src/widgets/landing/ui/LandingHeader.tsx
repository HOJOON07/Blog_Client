import Link from 'next/link';

export const LandingHeader = () => {
  return (
    <header className="z-50 fixed top-0 w-full bg-transparent border-b border-transparent">
      <div className="container flex h-20 items-center max-w-[88rem] mx-auto">
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
              Frontend Developer
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1 items-center justify-end gap-3 sm:gap-3 md:justify-end">
          <Icon name="github" href="https://github.com/HOJOON07" />
          <Icon name="instagram" href="https://www.instagram.com/hzoxjcnv/" />
          <Icon
            name="linkedin"
            href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EA%B9%80-95a151281"
          />
        </div>
      </div>
    </header>
  );
};
