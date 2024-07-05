import { z } from 'zod';

export const SignupUserSchema = z
  .object({
    email: z.string().trim().email(),
    password: z
      .string()
      .min(8, {
        message: '비밀번호는 최소 8자 이상 입력해주세요.',
      })
      .max(16, {
        message: '비밀번호는 16자 이하로 입력해주세요.',
      }),
    passwordConfirm: z
      .string()
      .min(8, {
        message: '비밀번호 확인 글자는 최소 8글자 이상입니다.',
      })
      .max(16, {
        message: '비밀번호 확인 글자는 최대 16글자 이상입니다.',
      }),
    devName: z
      .string()
      .min(2, {
        message: '데브월드 닉네임은 2글자 이상입니다.',
      })
      .max(16, {
        message: '데브월드 닉네임은 16글자 이상입니다.',
      }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export type SignupUserFormData = z.infer<typeof SignupUserSchema>;
