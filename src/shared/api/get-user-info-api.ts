import instance from './axios-instance-interceptor';

export const getUserInfo = async () => {
  const response = await instance.get('/users/info');
  return response.data;
};
