export default {
  auth: {
    register: '/register',
    login: '/login',
    currentUser: '/user'
  },
  cards: {
    allCards: '/posts', // GET
    createCard: '/posts', // POST
    editCard: 'posts/{id}', // PUT
    removeCard: '/posts/{id}', // DELETE
  }
};
