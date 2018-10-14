import Vue from 'vue';

export default function (token) {
  Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
