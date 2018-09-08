import * as types from './mutation-types.js';
import { isUndefined } from 'lodash';
import LocalStorageProvider from '../../../services/localStorageProvider'
import card from '../../../api/card.requests.js';

function cardsDataInit({ commit }) {
  const cards = LocalStorageProvider.getItem('cards');
  if (!isUndefined(cards) && cards.length !== 0) {
    commit(types.INIT_CARD_DATA, LocalStorageProvider.getParseItem('cards'));
  }
}

function addCardDataToStore({ commit, dispatch, getters }, data) {
  const isIdExist = getters.cardByID(data.id);
  if (!isIdExist) {
    LocalStorageProvider.setObjItemInArray('cards', data);
    commit(types.SAVE_CARD_DATA, data);
  } else {
    dispatch('addCardDataToStoreAfterEdit', data);
  }
}

function addCardDataToStoreAfterEdit({ commit, getters }, card) {
  LocalStorageProvider.setObjItemInArray('cards', card);
  commit(types.SAVE_EDITED_CARD_DATA, {
    card,
    currStatePosition: getters.cardIndexByID(card.id)
  });
}

function likeToggleCard({ commit, getters }, cardId) {
  const card = getters.cardByID(cardId);
  card.like = !card.like;
  
  LocalStorageProvider.setObjItemInArray('cards', card);
  commit(types.SAVE_EDITED_CARD_DATA, {
    card,
    currStatePosition: getters.cardIndexByID(cardId)
  });
}

function deleteCardDataFromStore({ commit, getters }, cardId) {
  commit(types.DELETE_CARD_DATA, getters.cardIndexByID(cardId));
  LocalStorageProvider.removeObjItemFromArray('cards', cardId);
}

// API INTERACTION
async function getAllCards({ commit }) {
  try {
    const { data:{ data:{ posts } } } = await card.getAllCards();
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
}


export default {
  addCardDataToStore,
  deleteCardDataFromStore,
  cardsDataInit,
  likeToggleCard,
  addCardDataToStoreAfterEdit,
  
  // API INTERACTION
  getAllCards
};
