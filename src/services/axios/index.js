import axios from 'axios';
import config from '../../config';
import errorHandler from './interceptors/errorHandler.js';
import responseHandler from './interceptors/responseHadler.js';

export default function (store) {
  const baseConfig = {
    baseURL: config.serverURI,
    headers: {
      'Content-Type': config.headers.type,
      'X-Application-Key': config.headers.appKey
    }
  };
  const axiosInstance = axios.create(baseConfig);
  axiosInstance.interceptors.response.use(responseHandler, errorHandler(store));
  return axiosInstance;
}
