import axios from 'axios';

interface UserInfoType {
  bio?: string;
  company?: string;
  devName?: string;
  email?: string;
  github?: string;
  location?: string;
  socialEtc?: string;
}

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const AuthGithub = async (userInfo: UserInfoType) => {
  try {
    const response = await axios.post('http://localhost:5500/auth/github', {
      ...userInfo,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const localStorageSetToken = (token: TokenType) => {
  localStorage.setItem('accessToken', token.accessToken);
  localStorage.setItem('refreshToken', token.refreshToken);
};
