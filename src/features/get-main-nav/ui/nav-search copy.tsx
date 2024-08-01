import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useCallback, useEffect, useState } from 'react';

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DialogDescription,
  DialogTitle,
  Icon,
} from '@/shared';
import { useCustomSearchParams } from '@/widgets/profiles/hooks/useCustomSearchParams';
import { useGetArticlesQuery } from '@/widgets/main-feed/tanstack-query/useGetArticelsQuery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Search = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (params: URLSearchParams, name: string, value: string) => {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params;
    },
    [searchParams],
  );
  const handleSearchArticle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let params = new URLSearchParams(searchParams.toString());
    params = createQueryString(params, 'where__title__i_like', value);
    params = createQueryString(params, 'where__description__i_like', value);
    router.push(pathname + '?' + params.toString());
  };

  const [where__title__i_like, where__description__i_like] =
    useCustomSearchParams([
      'where__title__i_like',
      'where__description__i_like',
    ]);

  const { articles, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetArticlesQuery();

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
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle hidden>Searh Command Dialog</DialogTitle>
        <CommandInput
          placeholder="search articles by title and description..."
          onChangeCapture={handleSearchArticle}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {articles?.pages.map(({ data }) =>
              data.map((article) => (
                <CommandItem key={article.id}>
                  <Icon name="document" size={4} className="mr-2" />
                  <span>{article.title}</span>
                </CommandItem>
              )),
            )}
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
        <DialogDescription hidden>
          search articles by title and description...
        </DialogDescription>
      </CommandDialog>
    </>
  );
};
