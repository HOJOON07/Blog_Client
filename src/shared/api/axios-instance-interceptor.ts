import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5500',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

//요청
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');
    // const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }
    // if (refreshToken) {
    //   config.headers['authorization'] = `Bearer ${refreshToken}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//응답

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const response = await instance.post(
          '/auth/token/access',
          {},
          {
            headers: {
              authorization: `Bearer ${refreshToken}`,
            },
          },
        );
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);

        instance.defaults.headers['authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['authorization'] = `Bearer ${accessToken}`;
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
