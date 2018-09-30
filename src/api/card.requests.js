import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  getAllCards (params) {
    return Vue.axios.get(api.cards.allCards, { params: params });
  },

  createCard (cardData) {
    return Vue.axios.post(api.cards.createCard, cardData);
  },

  editCard (data) {
    const { id, title, content } = data;
    return Vue.axios.put(api.cards.editCard.replace('{id}', id), { title, content });
  },

  removeCard (cardId) {
    return Vue.axios.delete(api.cards.removeCard.replace('{id}', cardId));
  },

  toggleCardLike (cardId) {
    return Vue.axios.post(api.cards.likeToggle.replace('{id}', cardId));
  }
};
