import * as types from './mutation-types';
import Vue from 'vue';
import { defaultState } from './const.js';

export default {
  [types.HANDLE_LOGIN] (state, token) {
    state.token = token;
    state.status = 'authorized';
  },

  [types.SAVE_USER_DATA] (state, userData) {
    if (state.status !== 'authorized') {
      state.status = 'authorized';
    }

    const {
      name,
      email,
      id,
      role,
      created_at: { date: createdDate },
      updated_at: { date: updatedDate }
    } = userData;

    state.user = {
      id,
      email,
      name,
      role,
      register: createdDate,
      updated: updatedDate
    };
  },

  [types.LOGOUT] (state) {
    for (let key in defaultState) {
      Vue.set(state, key, defaultState[key]);
    }
  }
};
