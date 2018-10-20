import * as types from './mutation-types.js';
import card from '../../../api/card.requests.js';

// API INTERACTION
async function getCardsFromServer ({ commit, dispatch }, params) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    const { data: { data: { posts: cards } } } = await card.getAllCards(params);
    dispatch('ui/hideLoader', null, { root: true });
    commit(types.INIT_CARD_DATA, cards); // add to store
  } catch (err) {
    console.log(err);
  }
}

async function createCard ({ commit, dispatch, getters }, { title, content }) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    await card.createCard({ title, content });
    dispatch('ui/hideLoader', null, { root: true });
  } catch (err) {
    console.log(err);
  }
}

async function editCard ({ commit, dispatch }, { id, title, content }) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    await card.editCard({
      id,
      title,
      content
    });
    dispatch('ui/hideLoader', null, { root: true });
  } catch (err) {
    console.log(err);
  }
}

async function removeCard ({ commit, getters, dispatch }, cardId) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    await card.removeCard(Number(cardId));
    dispatch('ui/hideLoader', null, { root: true });
  } catch (err) {
    console.log(err);
  }
}

async function toggleCardLike ({ commit, dispatch }, cardId) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    await card.toggleCardLike(cardId);
    dispatch('ui/hideLoader', null, { root: true });
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
