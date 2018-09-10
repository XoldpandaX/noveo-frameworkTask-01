export default {
  cards: state => state.cards,
  cardByID: state => id => state.cards.find(card => card.id === Number(id)),
  cardIndexByID: state => id => state.cards.findIndex(el => el.id === id)
}
