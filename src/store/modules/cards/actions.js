import * as types from './action-types.js';


function cardsDataInit({commit}) {
  let cards = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let firstSymbol = '#';
    
    if (key[0] === firstSymbol) {
      cards.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  commit(types.INIT_CARD_DATA, cards);
}

function addCardDataToStore({commit, dispatch}, data) {
  if (!data.edited) {
    dispatch('addToLocalStorage', data.storeData);
    commit(types.SAVE_CARD_DATA, data.storeData);
  } else {
    dispatch('addCardDataToStoreAfterEdit', data);
  }
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

function deleteCardDataFromStore({commit, dispatch, state}, cardIdToDelete) {
  state.cards.forEach((el, i) => {
    if (el.id === cardIdToDelete) {
      commit(types.DELETE_CARD_DATA, i);
      dispatch('deleteFromLocalStorage', el.id);
    }
  });
}

function likeToggle({commit, dispatch, state}, cardId) {
  let storageData = JSON.parse(localStorage.getItem(cardId));
  
  storageData.like = !storageData.like;
  dispatch('addToLocalStorage', storageData);
  state.cards.forEach(el => {
    if (el.id === cardId) {
      el.like = !el.like;
    }
  });
}

function deleteFromLocalStorage({commit}, cardID) {
  localStorage.removeItem(cardID);
}

function addToLocalStorage({commit, state, dispatch}, card) {
  localStorage.setItem(card.id, JSON.stringify(card));
}

function updateLocalStorage({state}, editedCardData) {
  localStorage.setItem(editedCardData.id, JSON.stringify(editedCardData));
}

export default {
  addCardDataToStore,
  addToLocalStorage,
  deleteCardDataFromStore,
  updateLocalStorage,
  deleteFromLocalStorage,
  cardsDataInit,
  likeToggle,
  addCardDataToStoreAfterEdit
};