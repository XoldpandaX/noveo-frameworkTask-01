import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import filters from './filters';
import constants from './constants';
import { store } from './store';

// FILTERS
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// CONSTANTS
Object.defineProperty(Vue.prototype, '$appConstants', {
  get () {
    return constants;
  }
});

Vue.config.productionTip = false;

const axiosConfig = axios.create({
  baseURL: 'http://rest-api.noveogroup.com/api/v1',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Application-Key': 'nea5tZq7Y2W60P0SGKbEjyseyCGLR3egY7v5cKwR'
  }
});

Vue.use(VueAxios, axiosConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
