import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5500',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

//요청
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
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
    console.log('error.config', error.config);
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      delete instance.defaults.headers.common['Authorization'];
      console.log('original retry', originalRequest._retry);
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

        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return instance(originalRequest);
        //
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          window.location.href = '/signin';
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
