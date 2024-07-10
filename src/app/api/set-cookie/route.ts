import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json();

    const extractRefrshToken = request.cookies.get('refreshToken');

    const finalRefreshToken = refreshToken || extractRefrshToken;

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

    return NextResponse.json({ message: '쿠키를 만들었습니다.' });
  } catch (error) {
    return NextResponse.json({ message: '쿠키 설정 실패' }, { status: 500 });
  }
}
