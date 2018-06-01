export default {
  cards: state => state.cards,
  getCardByID: (state) => (id) => {
    return state.cards.find(card => card.id === id);
  }
}