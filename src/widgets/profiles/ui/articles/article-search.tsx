import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

export const ArticleSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );
  const handleSearchArticle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parmas = new URLSearchParams(searchParams);
    const { value } = e.target;

    router.push(
      pathname + '?' + createQueryString('where__title__i_like', value),
    );
  };
  return (
    <div className="inline-flex items-center rounded-lg border border-solid text-sm h-10 px-3 relative w-full text-zinc-400 focus-within:border-primary">
      <input
        type="text"
        className="outline-none border-none bg-transparent w-full h-full"
        maxLength={150}
        placeholder="아티클을 검색할 수 있어요"
        onChange={handleSearchArticle}
        defaultValue={searchParams.get('where__title__i_like')?.toString()}
      />
    </div>
  );
};
