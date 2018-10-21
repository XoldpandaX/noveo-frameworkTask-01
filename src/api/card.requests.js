import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  getAllCards (params) {
    return Vue.axios.get(api.cards.cards, { params: params });
  },

  createCard (cardData) {
    return Vue.axios.post(api.cards.cards, cardData);
  },

  editCard (data) {
    const { id, title, content } = data;
    return Vue.axios.put(api.cards.cardInteraction.replace('{id}', id), { title, content });
  },

  removeCard (cardId) {
    return Vue.axios.delete(api.cards.cardInteraction.replace('{id}', cardId));
  },

  toggleCardLike (cardId) {
    return Vue.axios.post(`${api.cards.cardInteraction}/like`.replace('{id}', cardId));
  }
};
