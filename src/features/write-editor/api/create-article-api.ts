import instance from '@/shared/api/axios-instance-interceptor';
import { CreateArticleType } from '../model/create-article-type';

interface createArticleBodyType {
  body: CreateArticleType;
}

export const createArticleApi = async ({
  title,
  contents,
  description,
  thumbnails,
  isPrivate,
  isPublish,
}: CreateArticleType) => {
  try {
    const response = await instance.post('/articles', {
      title,
      contents,
      description,
      thumbnails,
      isPrivate,
      isPublish,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
