import { useToast, ToastAction } from '@/shared';
import { QueryClient, useMutation } from '@tanstack/react-query';
import {
  formDataType,
  s3FileUploadApi,
  s3FileUploadApiResponseType,
} from '../api/aws-s3-file-upload';
import { useState } from 'react';
export const useS3FileUploadMutation = () => {
  const queryClient = new QueryClient();
  const [uploadedFileData, setUploadedFileData] =
    useState<s3FileUploadApiResponseType | null>(null);
  const { toast } = useToast();
  const { mutate: fileUpladMutaion } = useMutation({
    mutationFn: (formData: formDataType) => s3FileUploadApi(formData),
    onSuccess: (data) => {
      setUploadedFileData(data);
      toast({
        variant: 'default',
        title: '이미지를 업로드 했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: '이미지 업로드에 실패 했습니다.',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });
  return { fileUpladMutaion, uploadedFileData };
};
