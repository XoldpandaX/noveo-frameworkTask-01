import * as types from './mutation-types';
import navigationElements from '../../../constants/navigationElements.js';
import userRoles from '../../../constants/roles.js';

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
  [types.SHOW_LOADER] (state) {
    state.isLoaderActive = true;
  },
  [types.HIDE_LOADER] (state) {
    state.isLoaderActive = false;
  },

  [types.CHANGE_NAVIGATION] (state, userRole) {
    switch (userRole) {
      case userRoles.user:
        state.navigationBar = navigationElements.userNav;
        break;
      case userRoles.admin:
        state.navigationBar = navigationElements.userNav;
        break;
      default:
        state.navigationBar = navigationElements.defaultNav;
    }
  },
  [types.CHANGE_CARDS_LAYOUT_VIEW] (state, layoutType) {
    state.cardsLayoutView = layoutType;
  }
};
