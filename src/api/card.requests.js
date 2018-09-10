import Vue from 'vue';
import api from '../constants/api-map.js';

export default {
  getAllCards(liked, order_by, sort, per_page) {
    return Vue.axios.get(api.posts.allPosts, {params: {liked, order_by, sort, per_page}});
  },
  
  removeCard(cardId) {
    return Vue.axios.delete(api.posts.removeCard.replace('{id}', cardId));
  }
}
