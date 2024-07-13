import { ToastAction, useToast } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { ProfileReadeMeEditApi } from './profile-readme-api';
import { TElement } from '@udecode/plate-common';

export const useProfileReadmeMutation = () => {
  const { toast } = useToast();
  const { mutate: profileReadmeEdit } = useMutation({
    mutationFn: (params: { userId: number; readme: TElement[] }) => {
      return ProfileReadeMeEditApi(params);
    },
    onSuccess: () => {
      toast({
        variant: 'default',
        title: '프로필 리드미를 성공적으로 작성했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
    },
  });
  return { profileReadmeEdit };
};
