import * as types from './mutation-types';
import { getRandomID } from '../../../helpers';

function closeAllModals ({ commit }) {
  commit(types.CLOSE_ALL_MODALS);
}

function showModal ({ commit }, { id, config = {} }) {
  commit(types.SHOW_MODAL, { id, config });
}

function showNotification ({ commit, dispatch }, { errNum, errMsg }) {
  const timeout = 4000; // period of time for show notification
  const id = getRandomID(); // notification id
  commit(types.SHOW_NOTIFICATION, { id, errNum, errMsg });

  setTimeout(() => {
    dispatch('hideNotification', id);
  }, timeout);
}

function hideNotification ({ commit }, notificationId) {
  commit(types.HIDE_NOTIFICATION, notificationId);
}

function showLoader ({ commit }) {
  commit(types.SHOW_LOADER);
}

function hideLoader ({ commit }) {
  commit(types.HIDE_LOADER);
}

function changeCardLayout ({ commit }, layoutType) {
  commit(types.CHANGE_CARDS_LAYOUT_VIEW, layoutType);
}

export default {
  closeAllModals,
  showModal,
  showNotification,
  hideNotification,
  showLoader,
  hideLoader,
  changeCardLayout
};
