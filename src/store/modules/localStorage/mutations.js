import * as types from './mutation-types.js';
import _ from 'lodash/lang.js';

export default {
  [types.ADD_LOCAL_STORAGE_DATA] (state, data) {
    //localStorage.setItem(data.id, JSON.stringify(data));
    //localStorage.setItem('cards', JSON.stringify(arr));
    const currentLocalStorage = JSON.parse(localStorage.getItem('cards'));
    if (_.isNull(currentLocalStorage)) {
      localStorage.setItem('cards', JSON.stringify([data]));
    } else {
      const index = currentLocalStorage.findIndex(el => el.id === data.id);
      index >= 0 ? currentLocalStorage.splice(index, 1, data) : currentLocalStorage.push(data);
      
      localStorage.setItem('cards', JSON.stringify(currentLocalStorage));
    }
  },
  
  [types.DELETE_LOCAL_STORAGE_DATA] (state, cardID) {
    localStorage.removeItem(cardID);
  }
}