import {
  DialogDescription,
  DialogTitle,
  Icon,
  useDebounceCallback,
} from '@/shared';
import { useSearchQueryStore } from '@/app/_store/search-all-articles-store';
import { useGetSearchArticles } from '@/features/search-article/tanstack-query/useGetSearchArticles';
import React, { useEffect } from 'react';
import {
  SearchDialog,
  SearchDialogEmptyItem,
  SearchDialogGroup,
  SearchDialogGroupHeader,
  SearchDialogInput,
  SearchDialogItem,
  SearchDialogList,
} from './SearchDialog';
import { useRouter } from 'next/navigation';
import { SearchPathType } from '../model/path.type';

export const SearchDialogContainer = ({
  open,
  setOpen,
  path,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  path: SearchPathType;
}) => {
  const router = useRouter();
  const { setSearchQuery, resetQuery } = useSearchQueryStore();
  const debounced = useDebounceCallback(setSearchQuery, 250);
  const { searchResults, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetSearchArticles(path, open);

  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounced(value);
  };

  const hasResults = searchResults?.pages?.some(({ data }) => data.length > 0);

  const routerPushUrl =
    path === 'public_articles' ? '/articles/details/' : '/workspace/';

  const handleRouter = (id: string) => {
    router.push(routerPushUrl + id);
    setOpen((open) => !open);
  };

  useEffect(() => {
    if (!open) {
      resetQuery();
    }
  }, [open, resetQuery]);

  return (
    <SearchDialog open={open} onOpenChange={setOpen}>
      <DialogTitle hidden>Searh Command Dialog</DialogTitle>
      <SearchDialogInput onChange={handleInputOnchange}></SearchDialogInput>
      <SearchDialogList>
        <SearchDialogGroup>
          <SearchDialogGroupHeader heading="Suggestions" />
          {hasResults ? (
            searchResults?.pages.map(
              ({ data }) =>
                data &&
                data.map((article) => (
                  <SearchDialogItem
                    key={article.id}
                    onClick={() => handleRouter(article.id)}
                  >
                    <Icon name="document" size={4} className="mr-2" />
                    <span>{article.title}</span>
                  </SearchDialogItem>
                )),
            )
          ) : (
            <SearchDialogEmptyItem>No results found.</SearchDialogEmptyItem>
          )}
        </SearchDialogGroup>
      </SearchDialogList>
      <DialogDescription hidden>
        search articles by title and description...
      </DialogDescription>
    </SearchDialog>
  );
};
