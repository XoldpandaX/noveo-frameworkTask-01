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

function addCardDataToStoreAfterEdit({ commit, getters }, card) {
  const sendData = {
    card,
    currStatePosition: getters.getCardIndexByID(card.id)
  };
  
  LocalStorageProvider.setObjItemInArray('cards', card);
  commit(types.SAVE_EDITED_CARD_DATA, sendData);
}

function likeToggleCard({ commit, getters }, cardId) {
  const card = getters.getCardByID(cardId);
  card.like = !card.like;
  
  const sendData = {
    card,
    currStatePosition: getters.getCardIndexByID(cardId)
  };
  
  LocalStorageProvider.setObjItemInArray('cards', card);
  commit(types.SAVE_EDITED_CARD_DATA, sendData);
}

function deleteCardDataFromStore({ commit, getters }, cardId) {
  commit(types.DELETE_CARD_DATA, getters.getCardIndexByID(cardId));
  LocalStorageProvider.removeObjItemFromArray('cards', cardId);
}

export default {
  addCardDataToStore,
  deleteCardDataFromStore,
  cardsDataInit,
  likeToggleCard,
  addCardDataToStoreAfterEdit
};