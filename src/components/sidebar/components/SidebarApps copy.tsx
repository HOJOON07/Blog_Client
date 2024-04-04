import Icon from '@/assets/icon/Icon';
import HomeIcon from '@/assets/icon/home.svg';
import Link from 'next/link';

export default function SidebarApps() {
  return (
    <div className="items-center block w-full h-auto grow basis-full">
      <ul className="flex flex-col pl-0 mb-0">
        <li className="mt-0.5 w-full">
          <Link
            href="/"
            className="text-sm leading-default py-[0.675rem] my-0 mx-2 flex items-center whitespace-nowrap rounded-lg bg-emerald-500/25 px-4 font-semibold text-slate-700 transition-all after:content-top"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-center text-black">
              <Icon name="home" className="text-emerald-500" size={18} />
            </div>
            <span className="ml-1 duration-300 pointer-events-none ease text-slate-700 dark:text-white opacity-100">
              Posts
            </span>
          </Link>
        </li>
        <li className="w-full my-4">
          <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60 dark:text-white">
            Apps
          </h6>
        </li>
        <li className="mt-0.5 w-full">
          <Link
            href="/"
            className="after:ease-in-out ease-in-out text-sm leading-normal py-[0.675rem] my-0 mx-2 flex items-center whitespace-nowrap rounded-lg bg-blue-500/30 px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:font-bold dark:after:text-white after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 after:content-down after:text-slate-800/50 after:w-3 after:items-center"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-center text-black">
              <Icon name="home" className="text-emerald-500" size={18} />
            </div>
            <span className="ml-1 duration-300 pointer-events-none ease text-slate-700 dark:text-white opacity-100">
              Dashboards
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
