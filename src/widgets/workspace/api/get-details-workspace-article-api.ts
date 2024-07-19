import instance from '@/shared/api/axios-instance-interceptor';
import { getWorkspaceArticlesApiResponseType } from '../model/get-workspace-response.type';
import { getWorkspaceDetailsArticleResponseType } from '../model/get-details-workspace-response.type';

export const getDetailWorkspaceArticleApi = async (id: number) => {
  try {
    const { data } = await instance.get<getWorkspaceDetailsArticleResponseType>(
      `/articles/workspace/${id}`,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
