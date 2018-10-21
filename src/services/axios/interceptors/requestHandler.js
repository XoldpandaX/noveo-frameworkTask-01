import LocalStorageProvider from '../../../services/localStorageProvider.js';

export default function (config) {
  if (!config.headers.common['Authorization']) {
    const token = LocalStorageProvider.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
}
