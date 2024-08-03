import { error } from 'console';
import instance from './axios-instance-interceptor';

export interface formDataType {
  file: File;
  isPublic: 'true' | 'false';
  type: 'profile' | 'article';
}

export interface s3FileUploadApiResponseType {
  url: string;
  key: string;
  isPublic: boolean;
}

export const s3FileUploadApi = async (formData: formDataType) => {
  try {
    const { data } = await instance.post<s3FileUploadApiResponseType>(
      'http://localhost:5500/aws-s3-upload/file',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  } catch (err) {
    throw err;
  }
};
