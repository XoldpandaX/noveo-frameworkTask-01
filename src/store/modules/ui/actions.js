import * as types from './action-types.js';

function closeAllModals({commit}, data) {
  commit(types.CLOSE_ALL_MODALS);
}

function showModal({commit}, modalId) {
  if (!localStorage.getItem('wasHere')) {
    commit(types.SHOW_MODAL, modalId);
    localStorage.setItem('wasHere', 'was');
  }
}

export default {
  closeAllModals,
  showModal
};