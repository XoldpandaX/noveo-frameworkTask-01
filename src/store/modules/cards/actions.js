import * as types from './mutation-types';
import card from '../../../api/card.requests';

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

async function createCard ({ dispatch }, { title, content }) {
  try {
    dispatch('ui/showLoader', null, { root: true });
    await card.createCard({ title, content });
    dispatch('ui/hideLoader', null, { root: true });
  } catch (err) {
    console.log(err);
  }
}

async function editCard ({ dispatch }, { id, title, content }) {
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

async function removeCard ({ dispatch }, cardId) {
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
    const { data: { data: { post } } } = await card.toggleCardLike(cardId);
    dispatch('ui/hideLoader', null, { root: true });
    commit(types.LIKE_TOGGLE, { cardId, post });
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
