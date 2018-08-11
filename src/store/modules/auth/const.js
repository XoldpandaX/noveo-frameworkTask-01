import LocalStorageProvider from '../../../services/localStorageProvider.js';

export const defaultState = {
  token: LocalStorageProvider.getItem('token') || '',
  status: '',
  user: {}
};