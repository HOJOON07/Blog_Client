import { BASE_URL } from '@/shared/api/base-url';
import axios from 'axios';

export const authNumberVerify = async ({
  email,
  authNumber,
}: {
  email: string;
  authNumber: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/mail/verify`, {
      email,
      authNumber,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
