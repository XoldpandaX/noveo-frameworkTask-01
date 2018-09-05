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

async function getLoginUserData({ commit, dispatch }, token) {
  const { data: { data } } = await auth.getCurrentUserData();
  
  if (!token) { // не передан параметр, например: при перезагрузке страницы
    commit(types.HANDLE_LOGIN, LocalStorageProvider.getItem('token'));
  }
  
  const userRole = data.user.role;
  dispatch('ui/changeNavigation', userRole, { root: true });
  commit(types.SAVE_USER_DATA, { ...data.user });
}

async function logout({ commit }) {
  LocalStorageProvider.removeItem('token');
  commit(types.LOGOUT);
  delete Vue.axios.defaults.headers.common['Authorization'];
}

export default {
  registerUser,
  loginUser,
  getLoginUserData,
  logout
};
