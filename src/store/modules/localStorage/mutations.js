import * as types from './mutation-types.js';

export default {
  [types.ADD_LOCAL_STORAGE_DATA] (state, data) {
    localStorage.setItem(data.id, JSON.stringify(data));
  },
  
  [types.DELETE_LOCAL_STORAGE_DATA] (state, cardID) {
    localStorage.removeItem(cardID);
  }
}