import axios from 'axios';
import { getArticlesApiResponseType } from '../model/get-articles-response.type';

export interface getArticlesApiParams {
  page?: number;
  take?: number;
  where__id__more_than?: number;
  where__id__less_than?: number;
  order__createdAt?: 'ASC' | 'DESC';
  where__likeCount__more_than?: number;
  where__title__i_like?: string;
  where__description__i_like?: string;
  order__updatedAt?: 'ASC' | 'DESC';
}

export const getArticlesApi = async (url: any) => {
  try {
    const { data } = await axios.get<getArticlesApiResponseType>(url);
    return data;
  } catch (err) {
    throw err;
  }
};
