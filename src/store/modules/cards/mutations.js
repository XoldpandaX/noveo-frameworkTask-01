import * as types from './mutation-types';
import findIndex from 'lodash/findIndex';

export default {
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data;
  },

  [types.LIKE_TOGGLE] (state, { cardId, post }) {
    const index = findIndex(state.cards, (el) => {
      return el.id === cardId;
    });
    state.cards.splice(index, 1, post);
  }
};
