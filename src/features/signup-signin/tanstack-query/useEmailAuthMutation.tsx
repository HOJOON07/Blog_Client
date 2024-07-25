import { useSignupFormDataStore } from '@/app/_store/signup-form-data-store';
import { useSignupProgressStore } from '@/app/_store/singup-form-progres-store';
import { ToastAction, useToast } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { emailAuthSend } from '../api/emailAuthSend';
export const useEmailAuthMutaion = () => {
  const { toast } = useToast();
  const { nextStep, step, setStep } = useSignupProgressStore();
  const { setEmail } = useSignupFormDataStore();
  const queryClient = useQueryClient();
  const queryKey = ['emailAuthSend'];
  const prevStep = step;

  const {
    mutate: sendEmailMutation,
    status,
    isError,
    error,
  } = useMutation({
    mutationFn: emailAuthSend,
    onMutate: async (email) => {
      await queryClient.cancelQueries({ queryKey: ['emailAuthSend'] });
      const prevEmail = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, email);
      return { prevEmail };
    },
    onSuccess: (data) => {
      toast({
        title: '인증번호를 전송했습니다. 메일을 확인하세요.',
      });
      queryClient.invalidateQueries({ queryKey: ['emailAuthSend'] });
    },
    onError: (error: any, variables, context) => {
      setStep(prevStep);
      setEmail('default.email');
      if (context?.prevEmail) {
        queryClient.setQueryData(queryKey, context.prevEmail);
      }

      toast({
        variant: 'destructive',
        title: error.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['emailAuthSend'] });
    },
  });

  return { sendEmailMutation, status, isError, error };
};
