import axios from 'axios';
import { getArticlesApiResponseType } from '../model/get-articles-response.type';

export const getArticlesApi = async () => {
  try {
    const { data } = await axios.get<getArticlesApiResponseType>(
      'http://localhost:5500/articles',
      {
        params: {},
      },
    );
    return data;
  } catch (err) {
    throw err;
  }
};
