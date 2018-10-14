import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import createAxios from './services/axios';
import LocalStorageProvider from './services/localStorageProvider.js';
import router from './router';
import filters from './filters';
import constants from './constants';
import { store } from './store';
import { checkUserPermissionToTransition } from './router/helpers';

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
router.beforeEach((to, from, next) => {
  if (token) {
    store.dispatch('auth/getLoginUserData').then(() => {
      const userRole = store.getters['auth/userRole'];
      const isRouteForbidden = checkUserPermissionToTransition(to.meta.forbiddenFor, userRole);
      if (isRouteForbidden) {
        next(false);
        store.dispatch('ui/showNotification', {
          errNum: 0,
          errMsg: 'Only an administrator can perform these actions.'
        });
        router.push('/');
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
