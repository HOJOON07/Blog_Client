'use client';
import { Button, ToastAction, useToast } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';

import { emailAuthSend } from '@/features/signup-signin';
import { EmailFormData, EmailSchema } from '../model/email-auth-schema';
import { useMutation } from '@tanstack/react-query';

import { useSignupProgressStore } from '@/app/_store/singup-form-progres-store';
import { useSignupFormDataStore } from '@/app/_store/signup-form-data-store';
import { useFormStatus } from 'react-dom';
import { useState } from 'react';

export const EmailAuthForm = () => {
  const { toast } = useToast();
  const { nextStep } = useSignupProgressStore();
  const { setEmail } = useSignupFormDataStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    control,
  } = useForm<EmailFormData>({ resolver: zodResolver(EmailSchema) });

  const { mutate: sendEmail, status } = useMutation({
    mutationFn: emailAuthSend,
    onSuccess: (data) => {
      toast({
        title: '인증번호를 전송했습니다. 메일을 확인하세요.',
      });
      setEmail(data);
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

  console.log(status);

  const onSubmit: SubmitHandler<EmailFormData> = (formData) => {
    sendEmail(formData.email);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-3 mb-4">
          <p className="font-semibold text-base">Email Authentication</p>
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
            <label htmlFor="email"></label>
            <input
              id="email"
              type="text"
              className="outline-none border-none bg-transparent w-full h-full"
              maxLength={60}
              placeholder="e-mail을 입력하세요"
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '이메일 형식이 올바르지 않습니다. pattern',
                },
              })}
            />
          </div>
          {errors.email ? (
            <p className="text-xs mb-1 text-destructive h-4">
              이메일 형식이 올바르지 않습니다.
            </p>
          ) : (
            <p className="text-xs mb-1 text-cyan-600 h-4">
              입력하신 e-mail주소로 인증 메일이 발송됩니다.
            </p>
          )}
        </div>
        <Button
          className="w-full h-[48px] rounded-xl py-3 text-base font-medium"
          type="submit"
          disabled={!isDirty || !isValid || status === 'pending'}
        >
          이메일 인증하기
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
};
