import * as types from './mutation-types';
import CONSTANTS from '../../../constants';

export default {
  [types.SHOW_MODAL] (state, data) {
    state.modals.push(data);
  },

  [types.CLOSE_ALL_MODALS] (state) {
    state.modals = [];
  },

  [types.SHOW_NOTIFICATION] (state, notificationObj) {
    state.notifications.push(notificationObj);
  },

  [types.HIDE_NOTIFICATION] (state, notificationId) {
    state.notifications.forEach((el, index) => {
      el.id === notificationId && state.notifications.splice(index, 1);
    });
  },

  [types.TOGGLE_LOADER] (state) {
    state.isLoaderActive = !state.isLoaderActive;
  },

  [types.CHANGE_NAVIGATION] (state, userRole) {
    switch (userRole) {
      case 'user':
        state.navigationBar = CONSTANTS.navigationElements.userNav;
        break;
      case 'admin':
        state.navigationBar = CONSTANTS.navigationElements.userNav;
        break;
      default:
        state.navigationBar = CONSTANTS.navigationElements.defaultNav;
    }
  },
  [types.CHANGE_CARDS_LAYOUT_VIEW] (state, layoutType) {
    state.cardsLayoutView = layoutType;
  }
};
