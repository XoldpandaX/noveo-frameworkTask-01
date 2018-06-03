import * as types from './action-types';
import { sortByObjValue } from './../../../helpers/helpFunctions.js';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    state.cards.push(data);
  },
  
  [types.SAVE_EDITED_CARD_DATA] (state, data) {
    const position = data.positionInCurrentState;
    state.cards[position] = data.storeData;
  },
  
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data.sort(sortByObjValue('order'));
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