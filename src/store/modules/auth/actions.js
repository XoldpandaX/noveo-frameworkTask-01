import * as types from './mutation-types.js';
import Vue from 'vue';
import auth from '../../../api/auth.requests.js';
import LocalStorageProvider from '../../../services/localStorageProvider.js';

async function registerUser ({ commit, dispatch }, userData) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    const { data: { data: { user } } } = await auth.registerUser(userData);
    dispatch('ui/hideLoader', null, { root: true });
    return user.email;
  } catch (err) {
    return false;
  }
}

async function loginUser ({ commit, dispatch }, userData) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    const { data: { data: { token } } } = await auth.loginUser(userData);
    LocalStorageProvider.setItem('token', token);
    commit(types.HANDLE_LOGIN, token);
    Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    dispatch('getLoginUserData');
    return true;
  } catch (err) {
    LocalStorageProvider.removeItem('token');
    return false;
  }
}

async function getLoginUserData ({ commit, dispatch }) {
  const { data: { data } } = await auth.getCurrentUserData();
  dispatch('ui/hideLoader', null, { root: true });
  const userRole = data.user.role;
  const {
    name,
    email,
    id,
    role,
    created_at: { date: createdDate },
    updated_at: { date: updatedDate }
  } = data.user;
  const userData = {
    id,
    email,
    name,
    role,
    register: createdDate,
    updated: updatedDate
  };
  LocalStorageProvider.setStringifyItem('user', userData);
  dispatch('ui/changeNavigation', userRole, { root: true });
  commit(types.SAVE_USER_DATA, userData);
}

async function getLoggedInUserData ({ commit, dispatch }) {
  const user = LocalStorageProvider.getParseItem('user');
  dispatch('ui/changeNavigation', user.role, { root: true });
  commit(types.SAVE_USER_DATA, user);
}

async function logout ({ commit }) {
  LocalStorageProvider.removeItem('token');
  LocalStorageProvider.removeItem('user');
  commit(types.LOGOUT);
  delete Vue.axios.defaults.headers.common['Authorization'];
}

export default {
  registerUser,
  loginUser,
  getLoginUserData,
  getLoggedInUserData,
  logout
};
