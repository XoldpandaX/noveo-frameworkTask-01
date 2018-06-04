import * as types from './mutation-types';

export default {
  [types.SHOW_MODAL] (state, modalID) {
    state.modals.push({ id: modalID });
  },
  
  [types.CLOSE_ALL_MODALS] (state) {
    state.modals = [];
  }
}