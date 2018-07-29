import * as types from './mutation-types.js';
import localStorageInstance from '../../../services/localStorage.js';
import _ from 'lodash/lang.js';

function cardsDataInit({ commit }) {
  //const cards = JSON.parse(localStorage.getItem('cards'));
  const cards = localStorageInstance.getData;
  !_.isNull(cards) && commit(types.INIT_CARD_DATA, cards);
}

function addCardDataToStore({ commit, dispatch, getters }, data) {
  const isIdExist = getters.getCardByID(data.id);
  if (!isIdExist) {
    localStorageInstance.addData(data);
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
      
      localStorageInstance.addData(cardData, cardData.id);
      commit(types.SAVE_EDITED_CARD_DATA, sendData);
    }
  });
}

function likeToggle({ commit, dispatch, state }, cardId) {
  state.cards.forEach((el, i) => {
    if (el.id === cardId) {
      el.like = !el.like;
      let sendData = {
        cardData: el,
        positionInCurrentState: i
      };
      
      localStorageInstance.addData(el, el.id);
      commit(types.SAVE_EDITED_CARD_DATA, sendData);
    }
  });
}

function deleteCardDataFromStore({ commit, dispatch, state }, cardIdToDelete) {
  state.cards.forEach((el, i) => {
    if (el.id === cardIdToDelete) {
      commit(types.DELETE_CARD_DATA, i);
      localStorageInstance.deleteData(cardIdToDelete);
    }
  });
}

export default {
  addCardDataToStore,
  deleteCardDataFromStore,
  cardsDataInit,
  likeToggle,
  addCardDataToStoreAfterEdit
};