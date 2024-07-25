import { ToastAction, useToast } from '@/shared';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  CreateCommentsApi,
  CreateCommentsApiParams,
} from '../api/create-comments-api';

export const useCreateCommentsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate: writeComments } = useMutation({
    mutationFn: ({ articleId, comment }: CreateCommentsApiParams) =>
      CreateCommentsApi({ articleId, comment }),
    onSuccess: () => {
      toast({
        variant: 'default',
        title: '댓글을 작성했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
      queryClient.invalidateQueries({ queryKey: ['articles/comments'] });
    },
  });
  return { writeComments };
};
