import * as types from './mutation-types.js';
import _ from 'lodash/lang.js';

function cardsDataInit({ commit }) {
  const cards = JSON.parse(localStorage.getItem('cards'));
  !_.isNull(cards) && commit(types.INIT_CARD_DATA, cards);
}

function addCardDataToStore({ commit, dispatch, getters }, data) {
  const isIdExist = getters.getCardByID(data.id);
  if (!isIdExist) {
    dispatch('localStorage/addToLocalStorageByID', data, { root: true });
    commit(types.SAVE_CARD_DATA, data);
  } else {
    dispatch('addCardDataToStoreAfterEdit', data);
  }
}

function addCardDataToStoreAfterEdit({ commit, state, dispatch }, cardData) {
  const { id } = cardData;
  
  state.cards.forEach((el, i) => {
    if (el.id === id) {
      
      let sendData = {
        cardData,
        positionInCurrentState: i,
      };
      
      dispatch('localStorage/addToLocalStorageByID', cardData, { root: true });
      commit(types.SAVE_EDITED_CARD_DATA, sendData);
    }
  });
}

function deleteCardDataFromStore({ commit, dispatch, state }, cardIdToDelete) {
  state.cards.forEach((el, i) => {
    if (el.id === cardIdToDelete) {
      commit(types.DELETE_CARD_DATA, i);
      dispatch('localStorage/deleteFromLocalStorageByID', el.id, { root: true });
    }
  });
}

function likeToggle({ commit, dispatch, state }, cardId) {
  let storageData = JSON.parse(localStorage.getItem('cards'));
  let exportObj = {};
  storageData.forEach(el => {
    if (el.id === cardId) {
      exportObj = {...el};
      exportObj.like = !exportObj.like;
    }
  });
  
  dispatch('localStorage/addToLocalStorageByID', exportObj, { root: true });
  commit(types.LIKE_CARD, cardId)
}

export default {
  addCardDataToStore,
  deleteCardDataFromStore,
  cardsDataInit,
  likeToggle,
  addCardDataToStoreAfterEdit
};