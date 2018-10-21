export default {
  auth: {
    register: '/register',
    login: '/login',
    currentUser: '/user'
  },
  cards: {
    cards: '/posts', // create, get all cards
    cardInteraction: 'posts/{id}' // /like
  }
};
