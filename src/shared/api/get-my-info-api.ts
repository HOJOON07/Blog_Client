import instance from './axios-instance-interceptor';

export const getMyInfo = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!accessToken && !refreshToken) {
    return null;
  }

  const response = await instance.get('/users/myinfo');
  return response.data;
};
