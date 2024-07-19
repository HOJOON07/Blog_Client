import { z } from 'zod';

export const DetailArticleSchema = z.object({
  title: z
    .string()
    .min(2, { message: '아티클 제목은 최소 2글자 이상입니다.' })
    .max(150, {
      message: '아티클 제목은 150글자 이하로 입력해주세요',
    }),

  description: z
    .string()
    .min(2, { message: '아티클의 설명은 최소 2글자 이상입니다.' })
    .max(200, {
      message: '아티클 설명은 200글자 이하로 입력해주세요',
    }),
});

export type DetailArticleFormData = z.infer<typeof DetailArticleSchema>;
