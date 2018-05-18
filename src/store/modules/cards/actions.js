import * as types from './action-types.js';

function addCardDataToStore({commit}, data) {
  commit(types.SAVE_CARD_DATA, data);
}

export default {
  addCardDataToStore
};