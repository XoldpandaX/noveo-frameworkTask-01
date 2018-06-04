function deleteFromLocalStorageByID({commit}, cardID) {
  localStorage.removeItem(cardID);
}

function addToLocalStorageByID({commit, state, dispatch, getters}, data) {
  localStorage.setItem(data.id, JSON.stringify(data));
}

export default {
  deleteFromLocalStorageByID,
  addToLocalStorageByID
}