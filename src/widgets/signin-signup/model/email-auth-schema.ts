import { z } from 'zod';

export const EmailSchema = z.object({
  email: z.string().trim().email({
    message: '이메일 형식이 올바르지 않습니다.',
  }),
});
export type EmailFormData = z.infer<typeof EmailSchema>;
