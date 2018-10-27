export default {
  cards: state => state.cards,
  cardByID: state => id => state.cards.find(card => card.id === Number(id))
};
