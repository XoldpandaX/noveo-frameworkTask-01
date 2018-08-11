import * as types from './mutation-types';
import Vue from 'vue';
import { defaultState } from './const.js';

export default {
  [types.HANDLE_LOGIN] (state, token) {
    state.token = token;
    state.status = 'authorized';
  },
  
  [types.SAVE_USER_DATA] (state, userData) {
    state.user = userData;
  },
  
  [types.LOGOUT] (state) {
    for (let key in defaultState) {
      Vue.set(state, key, defaultState[key]);
    }
  }
}