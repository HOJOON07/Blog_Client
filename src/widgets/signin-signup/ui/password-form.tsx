import { useSignupFormDataStore } from '@/app/_store/signup-form-data-store';
import { Button, Icon, ToastAction, cn, toast, useToast } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  SignupUserFormData,
  SignupUserSchema,
} from '../model/sign-user-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signupDevWorld } from '@/features/signup-signin/api/singup-user-final';
import { useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';
import { setCookie } from '@/shared/api/set-cookie';
import { useUserState } from '@/app/_store/useUserState';
import { setCookieAction } from '@/shared/lib/set-cookie-action';

export const PassWordForm = () => {
  const { toast } = useToast();
  const { resetData } = useUserState();
  const router = useRouter();
  const [devNameMessage, setDevNameMessage] =
    useState<string>('2 ~ 16자 사이로 입력해주세요');

  const { email: userEmail } = useSignupFormDataStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<SignupUserFormData>({
    resolver: zodResolver(SignupUserSchema),
    defaultValues: {
      email: userEmail,
    },
  });

  const { mutate: signup, data } = useMutation({
    mutationFn: signupDevWorld,
    onSuccess: async (data) => {
      const accessToken = await data.accessToken;
      const refreshToken = await data.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      try {
        await setCookieAction('accessToken', 'refreshToken');
        console.log('쿠키 설정');
      } catch (err) {
        console.log('쿠키 설정 에러');
      }
      resetData();
      router.push('/articles');
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: data.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  const onSubmit: SubmitHandler<SignupUserFormData> = (formData) => {
    const { email, password, passwordConfirm, devName } = formData;
    signup({
      email,
      password,
      passwordConfirm,
      devName,
    });
  };
  return (
    <>
      <form className="w-full items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-2">
          <p className="font-semibold text-base">Email*</p>
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
            <input
              disabled
              type="text"
              className="outline-none border-none bg-transparent w-full h-full"
              maxLength={150}
              placeholder={userEmail}
              value={userEmail}
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '이메일 형식이 올바르지 않습니다. pattern',
                },
              })}
            />
          </div>
          <p className="text-xs mb-1 text-cyan-600 h-4">
            {'Dev World에 가입하신 e-mail입니다.'}
          </p>
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="font-semibold text-base">DevWorld Name</p>
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
            <label htmlFor="dev"></label>
            <input
              type="text"
              className="outline-none border-none bg-transparent w-full h-full"
              maxLength={20}
              placeholder="DevWorld에서 사용되는 닉네임입니다."
              {...register('devName', {
                minLength: {
                  value: 2,
                  message: '사용할 수 있는 데브월드 닉네임은 2글자 이상입니다.',
                },
                maxLength: {
                  value: 16,
                  message:
                    '사용할 수 있는 데브월드 닉네임은 16글자 이상입니다.',
                },
                required: '데브월드 닉네임을 입력해주세요',
              })}
            />
          </div>
          <p className="text-xs mb-1 text-cyan-600">{devNameMessage}</p>
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="font-semibold text-base">password*</p>
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
            <input
              type="password"
              className="outline-none border-none bg-transparent w-full h-full"
              maxLength={20}
              placeholder="비밀번호를 입력해주세요"
              autoComplete="off"
              {...register('password', {
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자 이상 입력해주세요',
                },
                maxLength: {
                  value: 16,
                  message: '비밀번호는 16자 이하로 입력해주세요.',
                },
                required: '비밀번호를 입력해주세요',
              })}
            />
          </div>
          <p
            className={cn(
              `text-xs mb-1 ${
                errors.password ? 'text-destructive' : 'text-cyan-600'
              }`,
            )}
          >
            {errors.password
              ? errors.password.message
              : '8 ~ 16자 사이로 입력해주세요'}
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 mb-4">
          <p className="font-semibold text-base">confirm password*</p>
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
            <input
              type="password"
              className="outline-none border-none bg-transparent w-full h-full"
              maxLength={20}
              placeholder="비밀번호를 확인해주세요"
              autoComplete="off"
              {...register('passwordConfirm', {
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자 이상 입력해주세요',
                },
                maxLength: {
                  value: 16,
                  message: '비밀번호는 최대 16자 이상입니다.',
                },
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
                validate: (value: string) =>
                  value === watch('password') ||
                  '입력하신 비밀번호가 일치하지 않습니다.',
              })}
            />
          </div>
          <p
            className={cn(
              `text-xs mb-1 ${
                errors.passwordConfirm ? 'text-destructive' : 'text-cyan-600'
              }`,
            )}
          >
            {errors.passwordConfirm
              ? errors.passwordConfirm.message
              : '입력하신 비밀번호를 확인합니다.'}
          </p>
        </div>
        <DevTool control={control} />
        <Button
          className="w-full h-[48px] rounded-xl py-3 text-base font-medium"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};
