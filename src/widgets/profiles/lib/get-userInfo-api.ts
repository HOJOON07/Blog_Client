import axios from 'axios';
import { getUserInfoApiResponseType } from '../model/user-info-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const getUserInfoApi = async (devName: string) => {
  const response = await axios.get<getUserInfoApiResponseType>(
    `${BASE_URL}/users/info?devName=${devName}`,
    {},
  );

  return response.data;
};
