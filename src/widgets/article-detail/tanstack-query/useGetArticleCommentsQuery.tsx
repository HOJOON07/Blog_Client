import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getArticleCommentsApi } from '../api/get-article-comments-api';
import { ArticleCommentsResponseType } from '../model/article-comments-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const useGetArticleCommentsQuery = (
  articleId: string,
  enabled: boolean,
) => {
  const INITIAL_URL = `${BASE_URL}/articles/${articleId}/comments`;
  const {
    data: articlesComments,
    isLoading,
    isError,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    refetch,
    ...result
  } = useInfiniteQuery<ArticleCommentsResponseType, Error>({
    queryKey: ['articles/comments', articleId],
    queryFn: ({ pageParam }) => getArticleCommentsApi(pageParam),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next || undefined,
    enabled,
  });

  return {
    articlesComments,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    ...result,
  };
};
