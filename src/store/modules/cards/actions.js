import * as types from './mutation-types.js';

function cardsDataInit({commit}) {
  let cards = [];
  Object.keys(localStorage).forEach(key => {
    const firstSymbol = '#';
    
    if (key[0] === firstSymbol) {
      cards.push(JSON.parse(localStorage.getItem(key)));
    }
  });
  commit(types.INIT_CARD_DATA, cards);
}

function addCardDataToStore({commit, dispatch, getters}, data) {
  const isIdExist = getters.getCardByID(data.id);
  if (!isIdExist) {
    dispatch('addToLocalStorage', data);
    commit(types.SAVE_CARD_DATA, data);
  } else {
    dispatch('addCardDataToStoreAfterEdit', data);
  }
}

function addCardDataToStoreAfterEdit({commit, state, dispatch}, cardData) {
  const currentCardsState = state.cards;
  const {id, title, description, like, order} = cardData;
  
  currentCardsState.forEach((el, i) => {
    if (el.id === id) {
      
      const storeData = {
        id: id,
        order: order,
        title: title,
        description: description,
        like: like,
      };
      
      let sendData = {
        storeData,
        positionInCurrentState: i,
      };
      
      commit(types.SAVE_EDITED_CARD_DATA, sendData);
      dispatch('updateLocalStorage', sendData);
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
  
  state.cards.forEach((el, i) => {
    if (el.id === cardId) {
      commit(types.LIKE_CARD, i);
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
  localStorage.setItem(editedCardData.storeData.id, JSON.stringify(editedCardData.storeData));
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