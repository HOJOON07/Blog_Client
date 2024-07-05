import axios from 'axios';

export const authNumberVerify = async ({
  email,
  authNumber,
}: {
  email: string;
  authNumber: string;
}) => {
  try {
    const response = await axios.post('http://localhost:5500/mail/verify', {
      email,
      authNumber,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
