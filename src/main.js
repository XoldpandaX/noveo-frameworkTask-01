import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import filters from './filters';
import constants from './constants';
import { isPlainObject } from 'lodash';
import { store } from './store';
import LocalStorageProvider from './services/localStorageProvider'

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
    'X-Application-Key': 'RIYAaHFdO8JyhLJQ4ZQlTmi1y3GM7y9xwmkqa0E4'
  }
});

Vue.use(VueAxios, axiosConfig);

// is token exist logic
const token = LocalStorageProvider.getItem('token');
if (token) {
  Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

// axios [reject/response] interceptors
const handleSuccess = (response) => {
  return response;
};

const handleError = (err) => {
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
  console.log(err.response.data);
};
axiosConfig.interceptors.response.use(handleSuccess, handleError);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
