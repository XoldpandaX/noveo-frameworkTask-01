import * as types from './mutation-types';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    state.cards.push(data);
  },

  [types.SAVE_EDITED_CARD_DATA] (state, data) {
    state.cards.splice(data.currStatePosition, 1, data.card);
  },

  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data;
  },

  [types.DELETE_CARD_DATA] (state, cardIndex) {
    state.cards.splice(cardIndex, 1);
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
