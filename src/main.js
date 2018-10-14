import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import createAxios from './services/axios';
import LocalStorageProvider from './services/localStorageProvider.js';
import router from './router';
import routerBeforeEach from './router/beforeEach.js';
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

Vue.use(VueAxios, createAxios(store));
Vue.config.productionTip = false;

// is token exist logic
const token = LocalStorageProvider.getItem('token');
if (token) {
  Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

// hooks router global
router.beforeResolve((to, from, next) => routerBeforeEach(to, from, next, store));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
