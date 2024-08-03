import instance from '@/shared/api/axios-instance-interceptor';
import { CreateArticleType } from '../model/create-article-type';

export const createArticleApi = async ({
  title,
  contents,
  description,
  thumbnails,
  isPrivate,
  isPublish,
  articleImage,
}: CreateArticleType) => {
  try {
    const response = await instance.post('/articles', {
      title,
      contents,
      description,
      thumbnails,
      isPrivate,
      isPublish,
      articleImage,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
