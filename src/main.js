import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store';

Vue.config.productionTip = false;

const axiosConfig = axios.create({
  baseURL: 'http://rest-api.noveogroup.com/api/v1/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Application-Key': 's6EbiHU1o4EZtI6Q5D6vvPPUtOwUf6Fa7fMPTcJC'
  }
});

Vue.use(VueAxios, axiosConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
