import axios from 'axios';
import { getArticleDetailsResponseType } from '../model/article-detail-response.type';

export const getArticleDetailApi = async (articleId: string) => {
  try {
    const response = await axios.get<getArticleDetailsResponseType>(
      `http://localhost:5500/articles/${articleId}`,
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
