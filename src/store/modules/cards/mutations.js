import * as types from './mutation-types';
import { sortByObjValue } from '../../../helpers/index.js';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    console.log(data);
    state.cards.push(data);
  },
  
  [types.SAVE_EDITED_CARD_DATA] (state, data) {
    const position = data.positionInCurrentState;
    state.cards.splice(position, 1, data.cardData);
  },
  
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data.sort(sortByObjValue('order'));
  },
  
  [types.DELETE_CARD_DATA](state, cardIndex) {
    state.cards.splice(cardIndex, 1);
  },
  
  [types.LIKE_CARD] (state, cardId) {
    state.cards.forEach((el) => {
      if (el.id === cardId) {
        el.like = !el.like;
      }
    });
  }
}