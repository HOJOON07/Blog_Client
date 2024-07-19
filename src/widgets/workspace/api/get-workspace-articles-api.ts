import instance from '@/shared/api/axios-instance-interceptor';
import { getWorkspaceArticlesApiResponseType } from '../model/get-workspace-response.type';

export const getWorkspaceArticlesApi = async () => {
  try {
    const { data } = await instance.get<getWorkspaceArticlesApiResponseType>(
      '/articles/workspace',
    );
    return data;
  } catch (err) {
    throw err;
  }
};
