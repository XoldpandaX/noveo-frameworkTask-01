import * as types from './mutation-types.js';

function closeAllModals({ commit }) {
  commit(types.CLOSE_ALL_MODALS);
}

function showModal({ commit }, modalId) {
  switch(modalId) {
    case 'first-load-modal':
      if (!localStorage.getItem('wasHere')) {
        localStorage.setItem('wasHere', 'was');
        commit(types.SHOW_MODAL, modalId);
      }
      break;
    default:
      commit(types.SHOW_MODAL, modalId);
  }
}

export default {
  closeAllModals,
  showModal
};