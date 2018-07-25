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
      // currentLocalStorage.forEach((el, i, arr) => {
      //   // if (el.id === data.id) {
      //   //   arr.splice(i, 1, data);
      //   // } else {
      //   //   arr.push(data)
      //   // }
      //   //el.id === data.id ? arr.splice(i, 1, data) : arr.push(data);
      // });
      const index = currentLocalStorage.findIndex(el => el.id === data.id);
      index ? currentLocalStorage[index].push(data) : currentLocalStorage.push(data);
      console.log(data);
      // currentLocalStorage.push(data);
      //localStorage.setItem('cards', JSON.stringify(currentLocalStorage));
    }
  },
  
  [types.DELETE_LOCAL_STORAGE_DATA] (state, cardID) {
    localStorage.removeItem(cardID);
  }
}