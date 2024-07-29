import axios from 'axios';
import { getUserOverviewResponseType } from '../model/get-user-overview-response.type';

export const getUserOverviewApi = async (devName: string) => {
  try {
    const { data } = await axios.get<getUserOverviewResponseType>(
      `http://localhost:5500/users/overview?devName=${devName}`,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
