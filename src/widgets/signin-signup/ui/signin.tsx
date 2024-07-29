'use client';
import { Checkbox } from '@/components/plate-ui/checkbox';
import { signin } from '@/features/signup-signin/api/signin';
import { Button, Icon, ToastAction, cn, useToast } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SigninUserFormData, SigninUserSchema } from '../model/signin-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/shared/api/set-cookie';
import { useUserState } from '@/app/_store/useUserState';

export const SignIn = () => {
  const { resetData, setData, user } = useUserState();
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: emailAndPassWordLogin } = useMutation({
    mutationFn: signin,
    onSuccess: async (data) => {
      const accessToken = await data.accessToken;
      const refreshToken = await data.refreshToken;
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      try {
        await setCookie(accessToken, refreshToken);
      } catch (err) {}
      resetData();
      router.replace('/articles');
    },
    onError: (data: any) => {
      toast({
        variant: 'destructive',
        title: data.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninUserFormData>({
    resolver: zodResolver(SigninUserSchema),
  });

  const onSubmit: SubmitHandler<SigninUserFormData> = (formData) => {
    emailAndPassWordLogin({
      email: formData.email,
      password: formData.password,
    });
  };

  const handleOAuthGithub = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const url: string = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${CLIENT_ID}`;
    router.push(url);
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-2">
      <div className="w-full max-w-full flex-col items-center bg-zinc-900 p-8 rounded-md">
        <h3 className="mb-4 text-4xl font-bold text-primary">Sign in</h3>
        <p className="mb-9 ml-1 text-base text-cyan-600">
          Enter your email and password to sign in!
        </p>
        <Button
          className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl hover:cursor-pointer"
          variant="secondary"
          onClick={handleOAuthGithub}
        >
          <Icon name="github" size={5} />
          <p className="text-sm font-medium text-navy-700 dark:text-white">
            깃허브로 로그인하기
          </p>
        </Button>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200" />
          <p className="text-base text-gray-600"> or </p>
          <div className="h-px w-full bg-gray-200" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-sm">Email*</p>
            <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식이 올바르지 않습니다. pattern',
                  },
                })}
                type="text"
                className="outline-none border-none bg-transparent w-full h-full"
                maxLength={50}
                placeholder="데브월드 이메일을 입력하세요"
              />
            </div>
            <p
              className={cn(
                `text-xs mb-1 h-4 ${
                  errors.email ? 'text-destructive' : 'text-cyan-600'
                }`,
              )}
            >
              {errors.email ? errors.email.message : ''}
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-sm">Password*</p>
            <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
              <input
                type="password"
                autoComplete="off"
                className="outline-none border-none bg-transparent w-full h-full"
                maxLength={20}
                placeholder="비밀번호를 입력하세요"
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
                `text-xs mb-1 h-4 ${
                  errors.password ? 'text-destructive' : 'text-cyan-600'
                }`,
              )}
            >
              {errors.password ? errors.password.message : ''}
            </p>
          </div>
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="mt-2 flex items-center">
              <Checkbox defaultChecked />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                자동 로그인
              </p>
            </div>
            <a className="text-sm font-medium text-primary/65" href=" "></a>
          </div>
          <Button
            className="w-full h-[48px] rounded-xl py-3 text-base font-medium"
            type="submit"
          >
            Sign In
          </Button>
        </form>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
            계정이 없으신가요?
          </span>
          <Link
            href="/signup"
            className="ml-1 text-sm font-medium text-primary/65 hover:to-primary/90"
          >
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};
