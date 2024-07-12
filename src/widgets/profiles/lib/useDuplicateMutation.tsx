import { useMutation } from '@tanstack/react-query';
import { duplicateDevNameApi } from './duplicate-devName-api';
import { useToast, ToastAction } from '@/shared';

export const useDuplicateMutaion = () => {
  const { toast } = useToast();
  const { mutate: isDuplicateDevName } = useMutation({
    mutationFn: (devName: string) => duplicateDevNameApi(devName),
    onSuccess: (data) => {
      toast({
        variant: 'default',
        title: data.message,
        action: (
          <ToastAction altText="확인" className="bg-primary text-black">
            확인
          </ToastAction>
        ),
      });
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: data.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  return { isDuplicateDevName };
};
