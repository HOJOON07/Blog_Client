import axios from 'axios';

export const signupDevWorld = async ({
  email,
  password,
  passwordConfirm,
  devName,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
  devName: string;
}) => {
  try {
    const response = await axios.post(
      'http://localhost:5500/auth/register/email',
      {
        email,
        password,
        passwordConfirm,
        devName,
      },
    );
    return response.data;
  } catch (err) {
    console.log('Error response', err);
    throw err;
  }
};
