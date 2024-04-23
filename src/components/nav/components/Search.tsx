import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function Search() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3">
        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <input
        type="text"
        className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-accent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
        placeholder="Search"
      />
    </div>
  );
}
