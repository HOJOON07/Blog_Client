import axios from 'axios';

export const emailAuthSend = async (email: string) => {
  try {
    const response = await axios.post('http://localhost:5500/mail/send', {
      email,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
