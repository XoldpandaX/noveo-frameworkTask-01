import * as types from './mutation-types';
import { sortBy } from 'lodash';

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
  
  [types.DELETE_CARD_DATA](state, cardIndex) {
    state.cards.splice(cardIndex, 1);
  }
}
