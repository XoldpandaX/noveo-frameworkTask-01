import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  registerUser(userData) {
    return Vue.axios.post(api.auth.register, userData);
  },
  
  loginUser(userData) {
    return Vue.axios.post(api.auth.login, userData).catch((error) => {
      alert(error.response.data.errors);
    });
  }
};