import * as types from './action-types.js';

function addCardDataToStore({commit, dispatch}, data) {
  dispatch('addToLocalStorage', data);
  commit(types.SAVE_CARD_DATA, data);
}

function addToLocalStorage({commit, state}, card) {
  localStorage.setItem(card.id, JSON.stringify(card));
}

function cardsDataInit({commit}) {
  let cards = [];
  for (let i = 1; i < localStorage.length; i++) {
    cards.push(JSON.parse(localStorage.getItem(`#${i}`)));
  }
  commit(types.INIT_CARD_DATA, cards);
}

function likeToggle({commit, dispatch, state}, cardId) {
  const storageData = JSON.parse(localStorage.getItem(cardId));
  const regEXP = /\D+/ig;
  const numFromId = cardId.replace(regEXP, '');
  
  storageData.like = !storageData.like;
  dispatch('addToLocalStorage', storageData);
  dispatch('cardsDataInit');
}

export default {
  addCardDataToStore,
  addToLocalStorage,
  cardsDataInit,
  likeToggle
};