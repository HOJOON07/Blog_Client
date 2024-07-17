'use server';

import { cookies } from 'next/headers';

export async function deleteCookieAction() {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
}
