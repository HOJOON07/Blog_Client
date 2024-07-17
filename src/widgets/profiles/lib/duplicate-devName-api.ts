import instance from '@/shared/api/axios-instance-interceptor';
import { error } from 'console';

export const duplicateDevNameApi = async (devName: string) => {
  try {
    const { data } = await instance.post(`/users/duplicate`, {
      devName,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
