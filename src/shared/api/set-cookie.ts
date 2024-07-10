export const setCookie = async (accessToken: string, refreshToken?: string) => {
  const response = await fetch('/api/set-cookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ accessToken, refreshToken }),
  });

  if (!response.ok) {
    throw new Error('쿠키 설정 실패');
  }

  return response.json();
};
