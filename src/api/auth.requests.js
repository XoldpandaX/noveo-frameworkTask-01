import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  registerUser(userData) {
    return Vue.axios.post(api.auth.register, userData);
  }
};