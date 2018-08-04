import * as types from './mutation-types.js';
import LocalStorageProvider from '../../../services/localStorageProvider'
import { isUndefined } from 'lodash';

function cardsDataInit({ commit }) {
  const cards = LocalStorageProvider.getItem('cards');
  if (!isUndefined(cards) && cards.length !== 0) {
    commit(types.INIT_CARD_DATA, LocalStorageProvider.getParseItem('cards'));
  }
}

function addCardDataToStore({ commit, dispatch, getters }, data) {
  const isIdExist = getters.getCardByID(data.id);
  if (!isIdExist) {
    LocalStorageProvider.setObjItemInArray('cards', data);
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
      
      LocalStorageProvider.setObjItemInArray('cards', cardData);
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
  
      LocalStorageProvider.setObjItemInArray('cards', sendData.cardData);
      commit(types.SAVE_EDITED_CARD_DATA, sendData);
    }
  });
}

function deleteCardDataFromStore({ commit, dispatch, state }, cardIdToDelete) {
  state.cards.forEach((el, i) => {
    if (el.id === cardIdToDelete) {
      commit(types.DELETE_CARD_DATA, i);
      LocalStorageProvider.removeObjItemFromArray('cards', cardIdToDelete);
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