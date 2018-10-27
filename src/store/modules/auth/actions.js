import * as types from './mutation-types.js';
import Vue from 'vue';
import auth from '../../../api/auth.requests.js';
import LocalStorageProvider from '../../../services/localStorageProvider.js';

async function registerUser ({ commit, dispatch }, { name, email, password }) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    const userData = JSON.stringify({ name, email, password });
    const { data: { data: { user } } } = await auth.registerUser(userData);
    dispatch('ui/hideLoader', null, { root: true });
    return user.email;
  } catch (err) {
    return false;
  }
}

async function loginUser ({ commit, dispatch }, { email, password }) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    const userData = JSON.stringify({ email, password });
    const { data: { data: { token } } } = await auth.loginUser(userData);
    LocalStorageProvider.setItem('token', token);
    dispatch('getUserRole');
    dispatch('ui/changeNavigation', LocalStorageProvider.getItem('userRole'), { root: true });
    return true;
  } catch (err) {
    LocalStorageProvider.removeItem('token');
    return false;
  }
}

async function getUserRole ({ commit, dispatch }) {
  try {
    const { data: { data } } = await auth.getCurrentUserData();
    const { role } = data.user;
    LocalStorageProvider.setItem('userRole', role);
    dispatch('ui/hideLoader', null, { root: true });
  } catch (err) {
    return false;
  }
}

function checkUserRole ({ commit, dispatch }) {
  const token = LocalStorageProvider.getItem('token');
  if (token) {
    const role = LocalStorageProvider.getItem('userRole');
    dispatch('ui/changeNavigation', role, { root: true });
    commit(types.SAVE_AUTH_STATUS, role);
  }
}

async function loggedInUserData ({ commit, dispatch }) {
  dispatch('ui/showLoader', null, { root: true });
  const { data: { data } } = await auth.getCurrentUserData();
  dispatch('ui/hideLoader', null, { root: true });
  commit(types.SAVE_USER_DATA, data.user);
}

async function logout ({ commit }) {
  LocalStorageProvider.removeItem('token');
  LocalStorageProvider.removeItem('userRole');
  commit(types.LOGOUT);
  delete Vue.axios.defaults.headers.common['Authorization'];
}

export default {
  registerUser,
  loginUser,
  getUserRole,
  checkUserRole,
  loggedInUserData,
  logout
};
