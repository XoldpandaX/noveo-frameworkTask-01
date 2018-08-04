export default {
  cards: state => state.cards,
  
  getCardByID: (state) => (id) => {
    return state.cards.find(card => card.id === id);
  },
  
  getCardIndexByID: (state) => (id) => {
    return state.cards.findIndex(el => el.id === id);
  }
}