import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { SearchDialogContainer } from '@/features/search-article/ui/search-dialog-container';

export const Search = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div
        className="inline-flex items-center rounded-lg border border-solid text-sm h-8 select-none cursor-pointer px-3 my-5 relative text-zinc-400 w-[280px]"
        onClick={() => setOpen((open) => !open)}
      >
        <MagnifyingGlassIcon className="mr-3 w-5 h-5" />
        <p className="font-light tracking-wide flex-1">아티클 검색</p>
        <kbd className="">⌘ + K</kbd>
      </div>
      <SearchDialogContainer
        open={open}
        setOpen={setOpen}
        path="public_articles"
      />
    </>
  );
};
