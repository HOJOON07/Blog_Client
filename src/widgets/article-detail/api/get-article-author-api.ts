import axios from 'axios';
import { getArticleAuthorResponseType } from '../model/artcile-author-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const getArticlesAuthorApi = async (articleId: string) => {
  try {
    const response = await axios.get<getArticleAuthorResponseType>(
      `${BASE_URL}/articles/author/${articleId}`,
    );
    return {
      author: response.data.author.author,
      articles: response.data.articles,
      articleId: response.data.author.id,
    };
  } catch (err) {
    throw err;
  }
};
