import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5500',
  timeout: 5000,
});

const getUserToken = () => '';
const defaultConfig = {};
const httpErrorHandler = () => {};

const setRequestDefaultHeader = (requestConfig: AxiosRequestConfig) => {
  const config = requestConfig;
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json;charset=utf-8',
    user: getUserToken(),
  };
  return config;
};

const apiRequester: AxiosInstance = axios.create(defaultConfig);

apiRequester.interceptors.request.use(setRequestDefaultHeader);
