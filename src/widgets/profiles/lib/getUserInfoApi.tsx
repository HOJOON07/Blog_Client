import axios from 'axios';

export const getUserInfoApi = async (devName: string) => {
  const response = await axios.get(
    `http://localhost:5500/users/info?devName=${devName}`,
    {},
  );
  return response.data;
};
