import axios from 'axios';
import { getUserInfoApiResponseType } from '../model/user-info-response.type';

export const getUserInfoApi = async (devName: string) => {
  const response = await axios.get<getUserInfoApiResponseType>(
    `http://localhost:5500/users/info?devName=${devName}`,
    {},
  );

  return response.data;
};
