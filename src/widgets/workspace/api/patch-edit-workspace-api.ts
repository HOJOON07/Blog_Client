import instance from '@/shared/api/axios-instance-interceptor';
import { TElement } from '@udecode/plate-common';

export type isPrivateType = 'private' | 'open';
export type isPublishType = 'publish' | 'temporary';

export interface EditWorkspaceArticleType {
  title: string;
  contents: TElement[];
  description: string;
  isPrivate: isPrivateType;
  isPublish: isPublishType;
  thumbnails?: string;
}

interface ProfileEditApiParams {
  articleId: number;
  profileEditData: EditWorkspaceArticleType;
}

export const editWorkspaceArticleApi = async ({
  articleId,
  profileEditData,
}: ProfileEditApiParams) => {
  try {
    const { data } = await instance.patch(
      `/articles/${articleId}`,
      profileEditData,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
