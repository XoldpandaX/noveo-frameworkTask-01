import * as types from './mutation-types.js';
import card from '../../../api/card.requests.js';

// API INTERACTION
async function getCardsFromServer ({ commit }, params) {
  console.log(params);
  try {
    const { data: { data: { posts: cards } } } = await card.getAllCards();
    commit(types.INIT_CARD_DATA, cards); // add to store
  } catch (err) {
    console.log(err);
  }
}

async function createCard (data) {
  try {
    await card.createCard(data);
  } catch (err) {
    console.log(err);
  }
}

async function editCard (editCardData) {
  try {
    await card.editCard(editCardData);
  } catch (err) {
    console.log(err);
  }
}

async function removeCard ({ commit, getters }, cardId) {
  try {
    await card.removeCard(Number(cardId));
    commit(types.DELETE_CARD_DATA, getters.cardIndexByID(cardId)); // remove from store
  } catch (err) {
    console.log(err);
  }
}

async function toggleCardLike ({ commit }, cardId) {
  try {
    await card.toggleCardLike(cardId);
    commit(types.LIKE_TOGGLE, cardId);
  } catch (err) {
    console.log(err);
  }
}

export default {
  // API INTERACTION
  getCardsFromServer,
  createCard,
  editCard,
  removeCard,
  toggleCardLike
};
