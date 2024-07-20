'use server';

import { redirect } from 'next/navigation';

// import { permanentRedirect, redirect } from 'next/navigation';
// import { NextRequest, NextResponse } from 'next/server';

export default async function redirectOriginalUrl(articleId: number) {
  // return NextResponse.redirect(new URL('/articles', request.url))
  // return NextResponse.redirect(new URL(`/articles/${articleId}`,));
  // permanentRedirect(`/articles/${articleId}`);
  redirect(`/articles/${articleId}`);
}
