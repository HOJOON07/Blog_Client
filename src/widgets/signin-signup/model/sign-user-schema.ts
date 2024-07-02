import { z } from 'zod';

export const SignupUserSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .min(8, {
      message: '비밀번호는 최소 8글자 이상입니다.',
    })
    .max(16, {
      message: '비밀번호는 최대 16글자 이상입니다.',
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
      message: '데브월드 닉네임은 최소 2글자 이상입니다.',
    })
    .max(16, {
      message: '데브월드 닉네임은 최대 16글자 이상입니다.',
    }),
});

export type SignupUserFormData = z.infer<typeof SignupUserSchema>;
