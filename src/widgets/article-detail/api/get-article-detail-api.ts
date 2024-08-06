import axios from 'axios';
import { getArticleDetailsResponseType } from '../model/article-detail-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const getArticleDetailApi = async (articleId: string) => {
  try {
    const response = await axios.get<getArticleDetailsResponseType>(
      `${BASE_URL}/articles/${articleId}`,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
