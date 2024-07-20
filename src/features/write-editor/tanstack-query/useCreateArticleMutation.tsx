import { ToastAction, useToast } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { CreateArticleType } from '../model/create-article-type';
import { createArticleApi } from '../api/create-article-api';

export const useCreateArticleMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: createArticleMutation } = useMutation({
    mutationFn: ({
      title,
      contents,
      description,
      isPrivate,
      isPublish,
      thumbnails,
    }: CreateArticleType) => {
      if (thumbnails) {
        return createArticleApi({
          title,
          contents,
          description,
          isPrivate,
          isPublish,
          thumbnails,
        });
      } else {
        return createArticleApi({
          title,
          contents,
          description,
          isPrivate,
          isPublish,
        });
      }
    },
    onSuccess: () => {
      toast({
        variant: 'default',
        title: '아티클을 성공적으로 작성했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace'],
      }),
        queryClient.invalidateQueries({ queryKey: ['getArticles'] });
      router.push('/workspace');
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: data.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  return { createArticleMutation };
};
