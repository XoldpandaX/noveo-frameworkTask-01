import * as types from './action-types';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    state.cards.push(data);
  },
  
  [types.SAVE_EDITED_CARD_DATA] (state, data) {
    const position = data.positionInCurrentState;
    delete data.positionInCurrentState;
    
    state.cards[position] = data;
  },
  
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data;
  },
  
  [types.DELETE_CARD_DATA](state, cardIndex) {
    state.cards.splice(cardIndex, 1);
  },
  
  [types.LIKE_CARD] (state, cardIndex) {
    if (!state.cards[cardIndex].like) {
      state.cards[cardIndex].like = true;
    } else {
      state.cards[cardIndex].like = false;
    }
  }
}