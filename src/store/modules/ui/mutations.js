import * as types from './action-types';

export default {
  [types.SHOW_MODAL] (state, modalID) {
    state.modals.push({id: modalID});
  },
  
  [types.CLOSE_ALL_MODALS] (state, data) {
    state.modals = [];
  }
}