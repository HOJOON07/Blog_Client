'use server';

import { cookies } from 'next/headers';

export async function setCookieAction(
  accessToken: string,
  refreshToken?: string,
) {
  try {
    const finalRefreshToken =
      refreshToken || cookies().get('refreshToken')?.value;

    if (!finalRefreshToken) {
      throw new Error('refreshToken이 필요합니다');
    }

    cookies().set('accessToken', accessToken, {
      secure: true,
      httpOnly: true,
      maxAge: 3600 * 3,
    });
    cookies().set('refreshToken', finalRefreshToken, {
      secure: true,
      httpOnly: true,
      maxAge: 3600 * 24 * 7,
    });
    return { message: '쿠키를 만들었습니다.' };
  } catch (error) {
    return { message: '쿠키 설정 실패' };
  }
}
