import axios from 'axios';
import config from '../../config';
import errorHandler from './interceptors/errorHandler.js';
import requestHandler from './interceptors/requestHandler.js';

export default function (store) {
  const axiosInstance = axios.create({
    baseURL: config.serverURI,
    headers: {
      'Content-Type': config.headers.type,
      'X-Application-Key': config.headers.appKey
    }
  });
  axiosInstance.interceptors.response.use(response => response, errorHandler(store));
  axiosInstance.interceptors.request.use(requestHandler);
  return axiosInstance;
}
