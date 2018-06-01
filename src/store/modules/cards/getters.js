export default {
  cards: state => state.cards,
  getCardByID: (state) => (id) => {
    return state.cards.some(el => {
      return el.id === id;
    });
  }
}