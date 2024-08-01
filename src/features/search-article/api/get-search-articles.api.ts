import instance from '@/shared/api/axios-instance-interceptor';
import axios from 'axios';

export const getSearchPublicArticlesApi = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getSearchWorkspaceArticlesApi = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};
