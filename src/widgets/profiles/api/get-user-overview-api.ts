import axios from 'axios';
import { getUserOverviewResponseType } from '../model/get-user-overview-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const getUserOverviewApi = async (devName: string) => {
  try {
    const { data } = await axios.get<getUserOverviewResponseType>(
      `${BASE_URL}/users/overview?devName=${devName}`,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
