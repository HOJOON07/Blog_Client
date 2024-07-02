import { useSignupFormDataStore } from '@/app/_store/signup-form-data-store';
import { Button } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  SignupUserFormData,
  SignupUserSchema,
} from '../model/sign-user-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signupDevWorld } from '@/features/signup-signin/api/singup-user-final';

export const PassWordForm = () => {
  const { email: userEmail } = useSignupFormDataStore();
  const { setEmail } = useSignupFormDataStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupUserFormData>({
    resolver: zodResolver(SignupUserSchema),
    defaultValues: {
      email: userEmail,
    },
  });

  const { mutate: signup, data } = useMutation({
    mutationFn: signupDevWorld,
    onSuccess: (data) => {
      console.log(data);
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
      <button
        onClick={() => {
          const value = getValues();
          console.log(value.email);
        }}
      >
        value
      </button>
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
          <p className="text-xs mb-1 text-cyan-600">
            2 ~ 16자 사이로 입력해주세요
          </p>
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
                  message: '비밀번호는 최대 16자 이상입니다.',
                },
                required: '비밀번호를 입력해주세요',
              })}
            />
          </div>
          <p className="text-xs mb-1 text-cyan-600">
            {'8 ~ 16자 사이로 입력해주세요'}
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
                required: '비밀번호를 입력해주세요',
              })}
            />
          </div>
          <p className="text-xs mb-1 text-cyan-600">
            {'비밀번호를 확인해주세요'}
          </p>
        </div>

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
