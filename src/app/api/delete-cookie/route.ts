'use server';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    cookies().delete('accessToken');
    cookies().delete('refreshToken');

    return NextResponse.json({ message: '쿠키를 삭제했습니다.' });
  } catch (err) {
    return NextResponse.json({
      message: '쿠키를 삭제하는 도중에 에러가 발생했습니다.',
    });
  }
}
