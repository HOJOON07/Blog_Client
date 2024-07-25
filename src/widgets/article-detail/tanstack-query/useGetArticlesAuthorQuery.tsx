import { useQuery } from '@tanstack/react-query';
import { getArticlesAuthorApi } from '../api/get-article-author-api';
import { getArticleAuthorQueryType } from '../model/artcile-author-response.type';

export const useGetArticlesAuthorQuery = (articleId: string) => {
  const {
    data: article,
    isLoading,
    isError,
  } = useQuery<getArticleAuthorQueryType, Error>({
    queryKey: ['articles/author', articleId],
    queryFn: () => getArticlesAuthorApi(articleId),
  });

  return { article, isLoading, isError };
};
