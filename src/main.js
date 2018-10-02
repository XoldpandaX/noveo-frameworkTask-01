import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { isPlainObject } from 'lodash';
import App from './App.vue';
import router from './router';
import filters from './filters';
import constants from './constants';
import { store } from './store';
import LocalStorageProvider from './services/localStorageProvider.js';
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

Vue.config.productionTip = false;

const axiosConfig = axios.create({
  baseURL: 'http://rest-api.noveogroup.com/api/v1',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Application-Key': 'RNSCEktcb0JvJXPoXQ54uWBGInKfKkSp23GziYmn'
  }
});

Vue.use(VueAxios, axiosConfig);

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

// axios [reject/response] interceptors
const handleSuccess = (response) => {
  store.dispatch('ui/toggleLoader');
  return response;
};

const handleError = (err) => {
  store.dispatch('ui/toggleLoader');
  const errNum = err.response.status;
  const errMsg = err.response.data.errors;

  if (isPlainObject(errMsg)) {
    for (let key in errMsg) {
      store.dispatch('ui/showNotification', {
        errNum,
        errMsg: errMsg[key].length === 1 ? errMsg[key][0] : 'errors array contains more than one error'
      });
    }
  } else {
    store.dispatch('ui/showNotification', {
      errNum,
      errMsg
    });
  }
};

// axios request interceptors
const handleSuccessRequest = (response) => {
  store.dispatch('ui/toggleLoader');
  return response;
};

axiosConfig.interceptors.response.use(handleSuccess, handleError);
axiosConfig.interceptors.request.use(handleSuccessRequest, handleError);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
