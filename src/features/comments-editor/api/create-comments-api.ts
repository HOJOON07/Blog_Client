import instance from '@/shared/api/axios-instance-interceptor';
import { TElement } from '@udecode/plate-common';

export interface CreateCommentsApiParams {
  articleId: string;
  comment: TElement[];
}

export const CreateCommentsApi = async ({
  articleId,
  comment,
}: CreateCommentsApiParams) => {
  console.log(comment);
  try {
    const { data } = await instance.post(
      `http://localhost:5500/articles/${articleId}/comments`,
      {
        comment,
      },
    );
    return data;
  } catch (err) {
    throw err;
  }
};
