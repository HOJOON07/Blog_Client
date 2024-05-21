import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const Search = () => {
  return (
    <div className="inline-flex items-center rounded-lg border border-solid text-sm h-9 select-none cursor-pointer px-3 my-5 relative w-full text-zinc-400">
      <MagnifyingGlassIcon className="mr-3 w-5 h-5" />
      <p className="font-light tracking-wide flex-1">빠른 검색</p>
      <kbd className="">⌘ + K</kbd>
    </div>
  );
};
