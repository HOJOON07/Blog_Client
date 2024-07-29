import axios from 'axios';
import { getUserArticlesApiResponseType } from '../model/get-user-articles-api.type';

export const getUserArticlesApi = async (url: any) => {
  try {
    const { data } = await axios.get<getUserArticlesApiResponseType>(url);
    return data;
  } catch (err) {
    throw err;
  }
};
