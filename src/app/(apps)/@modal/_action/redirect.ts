'use server';

import { redirect } from 'next/navigation';

// import { permanentRedirect, redirect } from 'next/navigation';
// import { NextRequest, NextResponse } from 'next/server';

export default async function redirectURL(redirectUrl: string) {
  redirect(redirectUrl);
}
