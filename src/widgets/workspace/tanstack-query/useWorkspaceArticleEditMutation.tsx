import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  EditWorkspaceArticleType,
  editWorkspaceArticleApi,
} from '../api/patch-edit-workspace-api';
import { ToastAction, useToast } from '@/shared';
import { useRouter } from 'next/navigation';

export const useWorkspaceArticleEditMutation = (articleId: number) => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: editWorkspaceArticle } = useMutation({
    mutationFn: ({
      articleId,
      profileEditData,
    }: {
      articleId: number;
      profileEditData: EditWorkspaceArticleType;
    }) => editWorkspaceArticleApi({ articleId, profileEditData }),
    onSuccess: () => {
      toast({
        variant: 'default',
        title: '아티클을 성공적으로 수정했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace/articles/detail', articleId],
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace'],
      }),
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
  return { editWorkspaceArticle };
};
