import axios from 'axios';
import config from '../config';
import { isPlainObject } from 'lodash';
import { store } from '../store';

class AxiosProvider {
  constructor () {
    this.baseConfig = {
      baseURL: config.serverURI,
      headers: {
        'Content-Type': config.headers.type,
        'X-Application-Key': config.headers.appKey
      }
    };
    this.axiosInstance = axios.create(this.baseConfig);
    this.axiosInstance.interceptors.response.use(this._handleSuccess, this._handleError);
    this.axiosInstance.interceptors.request.use(this._handleSuccessRequest);
    return this.axiosInstance;
  }
  _handleError (err) {
    store.dispatch('ui/toggleLoader');
    const errNum = err.response.status;
    const errMsg = err.response.data.errors;
    console.log(err);
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
  }
  _handleSuccessRequest (response) {
    store.dispatch('ui/toggleLoader');
    return response;
  }
  _handleSuccess (response) {
    store.dispatch('ui/toggleLoader');
    return response;
  }
}

export default new AxiosProvider();
