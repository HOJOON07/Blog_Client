import axios from 'axios';
import { ArticleCommentsResponseType } from '../model/article-comments-response.type';

export const getArticleCommentsApi = async (url: any) => {
  try {
    const { data } = await axios.get<ArticleCommentsResponseType>(url);
    return data;
  } catch (err) {
    throw err;
  }
};
