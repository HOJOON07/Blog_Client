import instance from '@/shared/api/axios-instance-interceptor';
import { BASE_URL } from '@/shared/api/base-url';
import { TElement } from '@udecode/plate-common';

export interface CreateCommentsApiParams {
  articleId: string;
  comment: TElement[];
}

export const CreateCommentsApi = async ({
  articleId,
  comment,
}: CreateCommentsApiParams) => {
  try {
    const { data } = await instance.post(
      `${BASE_URL}/articles/${articleId}/comments`,
      {
        comment,
      },
    );
    return data;
  } catch (err) {
    throw err;
  }
};
