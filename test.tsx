'use client';
/* eslint-disable @next/next/no-img-element */
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useContext, createContext, useState } from 'react';

// const SidebarContext = createContext();

export default function Sidebartest({ children }: any) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider> */}

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }: any) {
  // const { expanded } = useContext(SidebarContext);
  const expanded = true;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

// 이전 헤더

{
  /* <header className="sticky top-0 mx-auto border-b border-border">
  <nav className="flex items-center h-16">
    <div>
      <Link href="/" className="text-2xl font-semibold">
        Ho.Blog
      </Link>
    </div>
    <div className="flex items-center">
      <div className="-my-2 ml-6 rounded-full bg-white/25 px-5 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] md:ml-8 font-semibold">
        Frontend Developer HoJoon
      </div>
      <div className="flex gap-5 ml-auto">
        <Link href="/" className="text-lg font-medium">
          Docs
        </Link>
        <Link href="/" className="text-lg font-medium">
          Docs
        </Link>
        <Link href="/" className="text-lg font-medium">
          Docs
        </Link>
        <Link href="/" className="text-lg font-medium">
          Docs
        </Link>
      </div>
    </div>

    <ModeToggle />
    <Icon name="github" cursor="pointer" />
    <div className="w-8 h-8 bg-black flex items-center justify-center hover:cursor-pointer">
      <p className="text-white">H</p>
    </div>
  </nav>
</header>; */
}
