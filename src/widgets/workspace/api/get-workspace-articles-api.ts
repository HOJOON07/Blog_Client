import instance from '@/shared/api/axios-instance-interceptor';
import { getWorkspaceArticlesApiResponseType } from '../model/get-workspace-response.type';

export const getWorkspaceArticlesApi = async (url: any) => {
  try {
    const { data } = await instance.get<getWorkspaceArticlesApiResponseType>(
      url,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
