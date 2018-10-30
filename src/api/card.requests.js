import Vue from 'vue';
import api from '../constants/api-map';

export default {
  getAllCards (params) {
    return Vue.axios.get(api.cards.cards, { params: params });
  },

  createCard (cardData) {
    return Vue.axios.post(api.cards.cards, cardData);
  },

  editCard (data) {
    const { id, title, content } = data;
    return Vue.axios.put(api.cards.cardById.replace('{id}', id), { title, content });
  },

  removeCard (cardId) {
    return Vue.axios.delete(api.cards.cardById.replace('{id}', cardId));
  },

  toggleCardLike (cardId) {
    return Vue.axios.post(`${api.cards.cardById}/like`.replace('{id}', cardId));
  }
};
