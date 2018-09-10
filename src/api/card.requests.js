import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  getAllCards(liked, order_by, sort, per_page) {
    return Vue.axios.get(api.cards.allCards, {params: {liked, order_by, sort, per_page}});
  },
  
  createCard(cardData) {
    return Vue.axios.post(api.cards.createCard, cardData);
  },
  
  removeCard(cardId) {
    return Vue.axios.delete(api.cards.removeCard.replace('{id}', cardId));
  },
  
  editCard(data) {
    const { id, title, content } = data;
    console.log(id);
    return Vue.axios.put(api.cards.editCard.replace('{id}', id), { title, content });
  }
}
