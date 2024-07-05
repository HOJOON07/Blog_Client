import { z } from 'zod';

export const SigninUserSchema = z.object({
  email: z.string().trim().email({
    message: '유효하지 않은 이메일 형식입니다.',
  }),
  password: z
    .string()
    .min(8, {
      message: '비밀번호는 최소 8자 이상 입력해주세요.',
    })
    .max(16, {
      message: '비밀번호는 16자 이하로 입력해주세요.',
    }),
});

export type SigninUserFormData = z.infer<typeof SigninUserSchema>;
