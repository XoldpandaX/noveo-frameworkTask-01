export default {
  auth: {
    register: '/register',
    login: '/login',
    currentUser: '/user'
  },
  cards: {
    cards: '/posts', // create, get all cards
    cardById: 'posts/{id}' // /like
  }
};
