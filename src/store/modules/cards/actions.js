import * as types from './action-types.js';

function addCardDataToStore({commit, dispatch}, data) {
  if (!data.edited) {
    dispatch('addToLocalStorage', data.storeData);
    commit(types.SAVE_CARD_DATA, data.storeData);
  } else {
    dispatch('addCardDataToStoreAfterEdit', data);
  }
}

function addToLocalStorage({commit, state, dispatch}, card) {
  localStorage.setItem(card.id, JSON.stringify(card));
}

function addCardDataToStoreAfterEdit({commit, state, dispatch}, cardData) {
  const currentCardsState = state.cards;
  const {id, title, description, like} = cardData.storeData;
  
  currentCardsState.forEach((el, i) => {
    if (el.id === id) {
      let cardData = {
        positionInCurrentState: i,
        id: id,
        title: title,
        description: description,
        like: like
      };
      commit(types.SAVE_EDITED_CARD_DATA, cardData);
      dispatch('updateLocalStorage', cardData);
    }
  });
}

function updateLocalStorage({state}, editedCardData) {
  localStorage.setItem(editedCardData.id, JSON.stringify(editedCardData));
}

function cardsDataInit({commit}) {
  let cards = [];
  for (let i = 1; i < localStorage.length; i++) {
    cards.push(JSON.parse(localStorage.getItem(`#${i}`)));
  }
  commit(types.INIT_CARD_DATA, cards);
}

function likeToggle({commit, dispatch, state}, cardId) {
  let storageData = JSON.parse(localStorage.getItem(cardId));
  
  storageData.like = !storageData.like;
  dispatch('addToLocalStorage', storageData);
  dispatch('cardsDataInit');
}

export default {
  addCardDataToStore,
  addToLocalStorage,
  updateLocalStorage,
  cardsDataInit,
  likeToggle,
  addCardDataToStoreAfterEdit
};