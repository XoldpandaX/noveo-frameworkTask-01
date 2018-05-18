import * as types from './action-types.js';

function addCardDataToStore({commit, dispatch}, data) {
  const cardData = data;
  dispatch('addToLocalStorage', data);
  commit(types.SAVE_CARD_DATA, data);
}

function addToLocalStorage({commit, state}, card) {
  localStorage.setItem(card.id, JSON.stringify(card));
}

export default {
  addCardDataToStore,
  addToLocalStorage
};