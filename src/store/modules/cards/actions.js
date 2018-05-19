import * as types from './action-types.js';

function addCardDataToStore({commit, dispatch}, data) {
  if (!data.edited) {
    dispatch('addToLocalStorage', data.storeData);
    commit(types.SAVE_CARD_DATA, data.storeData);
  } else {
    dispatch('replaceEditedData', data);
  }
}

function addToLocalStorage({commit, state}, card) {
  localStorage.setItem(card.id, JSON.stringify(card));
}

function replaceEditedData({commit, state}, cardData) {
  const currentCardsState = state.cards;
  const {id, title, description, like} = cardData.storeData;
  
  currentCardsState.forEach((el, i) => {
    if (el.id === id) {
      commit(types.SAVE_EDITED_CARD_DATA, {
        positionInCurrentState: i,
        id: id,
        title: title,
        description: description,
        like: like
      });
    }
  });
}

function cardsDataInit({commit}) {
  let cards = [];
  for (let i = 1; i < localStorage.length; i++) {
    cards.push(JSON.parse(localStorage.getItem(`#${i}`)));
  }
  commit(types.INIT_CARD_DATA, cards);
}

function likeToggle({commit, dispatch, state}, cardId) {
  const storageData = JSON.parse(localStorage.getItem(cardId));
  
  storageData.like = !storageData.like;
  dispatch('addToLocalStorage', storageData);
  dispatch('cardsDataInit');
}

export default {
  addCardDataToStore,
  addToLocalStorage,
  cardsDataInit,
  likeToggle,
  replaceEditedData
};