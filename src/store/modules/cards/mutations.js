import * as types from './mutation-types';

export default {
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data;
  },

  [types.LIKE_TOGGLE] (state, cardId) {
    state.cards.forEach((el) => {
      if (el.id === cardId) {
        el.liked = !el.liked; // like or not like
        el.liked ? el.total_likes++ : el.total_likes--; // total likes counter
      }
    });
  }
};
