'use client';
import { SearchDialogContainer } from '@/features/search-article/ui/search-dialog-container';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

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
      <div className="inline-flex items-center rounded-lg border border-solid text-sm h-9 select-none cursor-pointer px-3 my-5 relative w-full text-zinc-400">
        <MagnifyingGlassIcon className="mr-3 w-5 h-5" />
        <p className="font-light tracking-wide flex-1">빠른 검색</p>
        <kbd className="">⌘ + K</kbd>
      </div>
      <SearchDialogContainer open={open} setOpen={setOpen} path="workspace" />
    </>
  );
};
