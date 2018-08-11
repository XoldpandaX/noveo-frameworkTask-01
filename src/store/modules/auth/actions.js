import * as types from './mutation-types.js';
import auth from '../../../api/auth.requests.js';
import LocalStorageProvider from '../../../services/localStorageProvider.js';

async function registerUser({ commit }, userData) {
  try {
    const { data } = await auth.registerUser(userData);
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}

async function loginUser({ commit }, userData) {
  try {
    const { data } = await auth.loginUser(userData);
    const { token } = data.data;
    LocalStorageProvider.setItem('token', token);
    
    return true;
  } catch(err) {
    LocalStorageProvider.removeItem('token');
    console.log(err);
    return false;
  }
}

export default {
  registerUser,
  loginUser
};