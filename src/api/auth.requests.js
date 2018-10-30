import Vue from 'vue';
import api from '../constants/api-map';

export default {
  registerUser (userData) {
    return Vue.axios.post(api.auth.register, userData);
  },

  loginUser (userData) {
    return Vue.axios.post(api.auth.login, userData);
  },

  getCurrentUserData () {
    return Vue.axios.get(api.auth.currentUser);
  }
};
