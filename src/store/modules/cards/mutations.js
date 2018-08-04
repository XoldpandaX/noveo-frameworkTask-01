import * as types from './mutation-types';
import { sortByObjValue } from '../../../helpers/index.js';

export default {
  [types.SAVE_CARD_DATA] (state, data) {
    state.cards.push(data);
  },
  
  [types.SAVE_EDITED_CARD_DATA] (state, data) {
    state.cards.splice(data.currStatePosition, 1, data.cardData);
  },
  
  [types.INIT_CARD_DATA] (state, data) {
    state.cards = data.sort(sortByObjValue('order'));
  },
  
  [types.DELETE_CARD_DATA](state, cardIndex) {
    state.cards.splice(cardIndex, 1);
  }
}