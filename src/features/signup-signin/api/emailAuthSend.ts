import { BASE_URL } from '@/shared/api/base-url';
import axios from 'axios';

export const emailAuthSend = async (email: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/mail/send`, {
      email,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
