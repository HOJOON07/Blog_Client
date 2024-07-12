import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookiesAcessToken = request.cookies.get('accessToken');
  const cookiesRefreshToken = request.cookies.get('refreshToken');

  const url = request.nextUrl.clone();

  // 쿠키가 둘 다 있는 경우
  if (cookiesAcessToken && cookiesRefreshToken) {
    if (url.pathname === '/signup' || url.pathname === '/signin') {
      // signup 페이지로 접근하려는 경우 articles로 리다이렉트
      url.pathname = '/articles';
      return NextResponse.redirect(url);
    }
  } else {
    // 쿠키가 하나라도 없는 경우
    if (
      url.pathname.startsWith('/workspace') ||
      url.pathname.startsWith('/profiles/edit')
    ) {
      // workspace나 profiles/edit 페이지로 접근하려는 경우 signin으로 리다이렉트
      url.pathname = '/articles';
      return NextResponse.redirect(url);
    }
  }

  // 나머지 경우에는 원래 요청대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/workspace/:path*', '/profiles/edit/:path*', '/signup', '/signin'],
};
