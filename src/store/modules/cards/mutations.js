import * as types from './action-types';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    state.cards.push(data);
  },
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data;
  }
}