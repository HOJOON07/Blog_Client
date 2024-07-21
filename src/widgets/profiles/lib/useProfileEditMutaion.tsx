'use client';
import { ToastAction, useToast } from '@/shared';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { ProfileEditApi, ProfileEditType } from './profile-edit-api';
import { useRouter } from 'next/navigation';

export const useProfileEditMutation = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: profileEditMutation } = useMutation({
    mutationFn: (params: {
      userId: number;
      profileEditData: ProfileEditType;
    }) => {
      if (params.userId === null) {
        throw new Error('User ID is null');
      }
      return ProfileEditApi(params);
    },
    onSuccess: () => {
      toast({
        variant: 'default',
        title: '프로필을 성공적으로 수정했습니다.',
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
      queryClient.invalidateQueries();
    },
  });

  return { profileEditMutation };
};
