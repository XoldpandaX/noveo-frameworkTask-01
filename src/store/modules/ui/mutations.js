import * as types from './mutation-types';
import CONSTANTS from "../../../constants";

export default {
  [types.SHOW_MODAL] (state, modalID) {
    state.modals.push({ id: modalID });
  },
  
  [types.CLOSE_ALL_MODALS] (state) {
    state.modals = [];
  },
  
  [types.SHOW_NOTIFICATION] (state, notificationObj) {
    state.notifications.push(notificationObj);
  },
  
  [types.HIDE_NOTIFICATION] (state, notificationIndex) {
    state.notifications.splice(notificationIndex, 1);
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
  }
}
