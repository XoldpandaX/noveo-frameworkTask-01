import * as types from './mutation-types.js';
import Vue from 'vue';
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

async function loginUser({ commit, dispatch }, userData) {
  try {
    const { data: { data: { token } } } = await auth.loginUser(userData);
    LocalStorageProvider.setItem('token', token);
    commit(types.HANDLE_LOGIN, token);
    Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    dispatch('getLoginUserData', token);
    return true;
  } catch(err) {
    LocalStorageProvider.removeItem('token');
    console.log(err);
    return false;
  }
}

async function getLoginUserData({ commit }) {
  const { data: { data } } = await auth.getCurrentUserData();
  commit(types.SAVE_USER_DATA, { ...data.user });
}

async function logout({ commit }) {
  commit(types.LOGOUT);
}

export default {
  registerUser,
  loginUser,
  getLoginUserData,
  logout
};