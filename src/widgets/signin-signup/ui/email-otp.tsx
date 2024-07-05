'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ToastAction, useToast } from '@/shared';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared';
import { useSignupFormDataStore } from '@/app/_store/signup-form-data-store';
import { useMutation } from '@tanstack/react-query';
import { authNumberVerify } from '@/features/signup-signin/api/authNumberVerify';
import { useSignupProgressStore } from '@/app/_store/singup-form-progres-store';

const FormSchema = z.object({
  authNumber: z.string().min(6, {
    message: '인증번호를 입력해주세요',
  }),
  email: z.string().trim().email({
    message: '입력하신 이메일 입니다.',
  }),
});

export function EmailInputOTPForm() {
  const { toast } = useToast();
  const { email } = useSignupFormDataStore();
  const { nextStep } = useSignupProgressStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: email,
      authNumber: '',
    },
  });

  const { mutate: verify, data } = useMutation({
    mutationFn: authNumberVerify,
    onSuccess: (data) => {
      nextStep();
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: data.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    verify({ email: data.email, authNumber: data.authNumber });
    toast({
      title: '인증번호를 제출했습니다.',
      description: (
        <p className="text-xs text-cyan-600">
          인증번호 확인 후에 회원가입이 완료됩니다.
        </p>
      ),
      action: (
        <ToastAction altText="확인" className="bg-primary text-black">
          확인
        </ToastAction>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="authNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">{email}</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="w-full">
                    <InputOTPSlot index={0} className="w-1/6 h-14" />
                    <InputOTPSlot index={1} className="w-1/6 h-14" />
                    <InputOTPSlot index={2} className="w-1/6 h-14" />
                    <InputOTPSlot index={3} className="w-1/6 h-14" />
                    <InputOTPSlot index={4} className="w-1/6 h-14" />
                    <InputOTPSlot index={5} className="w-1/6 h-14" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-base">
                가입 인증 메일을 확인후 인증번호를 입력해주세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button type="submit" className="text-sm font-semibold">
            인증번호 확인
          </Button>
        </div>
      </form>
    </Form>
  );
}
