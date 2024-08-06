import { BASE_URL } from '@/shared/api/base-url';
import axios from 'axios';

export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const base64EmailPassword = btoa(`${email}:${password}`);
    const response = await axios.post(
      `${BASE_URL}/auth/login/email`,
      {},
      {
        headers: {
          authorization: `Basic ${base64EmailPassword}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
    throw error;
  }
};
