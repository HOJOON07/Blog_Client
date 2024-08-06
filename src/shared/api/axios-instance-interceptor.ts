import axios from 'axios';
import { setCookie } from './set-cookie';
import { setCookieAction } from '../lib/set-cookie-action';
import { BASE_URL } from './base-url';

export const getLocalStorageAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const getLoalStorageRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//요청
instance.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorageAccessToken();
    if (accessToken) {
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const RotateAccessToken = async () => {
  const refreshToken = getLoalStorageRefreshToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/token/access`,
      {},
      {
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    // 리프레시 토큰이 만료되면 여기서 에러를 처리
    throw error;
  }
};

export const RotateRefreshToken = async () => {};

//응답

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        const { accessToken } = await RotateAccessToken();
        await setCookieAction('accessToken');
        // await setCookie(accessToken);
        localStorage.setItem('accessToken', accessToken);
        instance.defaults.headers.common[
          'authorization'
        ] = `Bearer ${accessToken}`;
        return instance(originalConfig);
      } catch (error: any) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
