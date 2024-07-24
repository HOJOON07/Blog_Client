import { z } from 'zod';

export const ProfilesEditSchema = z.object({
  // 이미지 처리 추가해줘야 함
  devName: z
    .string()
    .min(2, {
      message: '데브월드 닉네임은 2글자 이상입니다.',
    })
    .max(16, {
      message: '데브월드 닉네임은 16글자 이상입니다.',
    }),

  position: z
    .string()
    .min(2, {
      message: '최소 2글자 이상 입력해주세요',
    })
    .max(16, {
      message: '포지션은 16글자 이하로 입력해주세요',
    })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),

  bio: z
    .string()
    .min(2, {
      message: '최소 2글자 이상 입력해주세요',
    })
    .max(30, {
      message: '한줄 소개 30글자 이하로 입력해주세요',
    })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),

  location: z
    .string()
    .min(2, {
      message: '최소 2글자 이상 입력해주세요',
    })
    .max(8, {
      message: '거주지 정보는 간단하게 입력해주세요. 최대 8글자입니다.',
    })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  github: z
    .string()
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  email: z.string().email(),
  linkedin: z
    .string()
    .url({ message: '유효하지 않은 url형식입니다.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  instagram: z
    .string()
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
  socialEtc: z
    .string()
    .url({ message: '유효하지 않은 url형식입니다.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val === '' ? undefined : val)),
});

export type ProfileEditFormData = z.infer<typeof ProfilesEditSchema>;
