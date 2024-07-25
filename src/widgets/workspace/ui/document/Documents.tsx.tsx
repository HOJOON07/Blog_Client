'use client';
import { DocumentItem } from '@/widgets/workspace';
import { useGetWorkspaceQuery } from '../../tanstack-query/useGetWorkspaceQuery';
import { useCallback, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/shared';

export const Documents = () => {
  const { workspaces, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetWorkspaceQuery();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { entry } = useIntersectionObserver(observerRef, {});
  const isPageEnd = !!entry?.isIntersecting;

  const fetchNext = useCallback(async () => {
    const res = await fetchNextPage();
    if (res.isError) {
      console.log(res.error);
    }
  }, [fetchNextPage]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isPageEnd && hasNextPage) {
      timerId = setTimeout(() => {
        fetchNext();
      }, 200);
    }
    return () => clearTimeout(timerId);
  }, [fetchNext, isPageEnd, hasNextPage]);

  return (
    <div>
      {workspaces?.pages.map(({ data }) => {
        return data.map((documet) => (
          <DocumentItem key={documet.id} article={documet} />
        ));
      })}
      <div className="w-full touch-none h-10 mb-10" ref={observerRef} />
    </div>
  );
};
