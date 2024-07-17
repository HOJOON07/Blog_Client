export const deleteCookie = async () => {
  const response = await fetch('/api/delete-cookie', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('쿠키 삭제 실패');
  }
  return response.json();
};
