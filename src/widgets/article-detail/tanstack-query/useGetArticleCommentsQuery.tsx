import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getArticleCommentsApi } from '../api/get-article-comments-api';
import { ArticleCommentsResponseType } from '../model/article-comments-response.type';

export const useGetArticleCommentsQuery = (
  articleId: string,
  enabled: boolean,
) => {
  const INITIAL_URL = `http://localhost:5500/articles/${articleId}/comments`;
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
