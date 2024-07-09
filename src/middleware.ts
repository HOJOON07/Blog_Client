import { getUserInfo } from '@/shared/api/get-user-info-api';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // const token = req.headers.get('authorization');
  // const userInfo = await getUserInfo();
  // console.log(userInfo);
  // if (req.nextUrl.pathname.startsWith('/workspace') && !token && !userInfo) {
  //   return;
  // }
  // const url = req.url;
  // if (!token || !userInfo) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
  // if (req.url.includes('/signin') && userInfo) {
  //   return NextResponse.redirect(new URL('/articels'));
  // }
  // return NextResponse.redirect(new URL('/articles', req.url));

  const cookiesAcessToken = request.cookies.get('accessToken=');
  const cookiesRefreshToken = request.cookies.get('refreshToken=');

  console.log(cookiesAcessToken, cookiesRefreshToken);
  console.log(request.cookies);

  if (!cookiesAcessToken || !cookiesRefreshToken) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: '/workspace',
};
