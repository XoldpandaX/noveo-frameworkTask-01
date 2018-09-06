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

function showNotification({ commit }, notificationObj) {
  commit(types.SHOW_NOTIFICATION, notificationObj);
}

function hideNotification({ commit }, notificationIndex) {
  commit(types.HIDE_NOTIFICATION, notificationIndex);
}

function toggleLoader({ commit }) {
  commit(types.TOGGLE_LOADER);
}

function changeNavigation({ commit }, userRole) {
  commit(types.CHANGE_NAVIGATION, userRole);
}

export default {
  closeAllModals,
  showModal,
  showNotification,
  hideNotification,
  toggleLoader,
  changeNavigation
};
