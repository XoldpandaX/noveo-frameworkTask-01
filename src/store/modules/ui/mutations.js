import * as types from './mutation-types';

export default {
  [types.SHOW_MODAL] (state, { id, config }) {
    state.modals.push({ id, config });
  },

  [types.CLOSE_ALL_MODALS] (state) {
    state.modals = [];
  },

  [types.SHOW_NOTIFICATION] (state, { errNum, errMsg }) {
    state.notifications.push({ errNum, errMsg });
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
  [types.CHANGE_CARDS_LAYOUT_VIEW] (state, layoutType) {
    state.cardsLayoutView = layoutType;
  }
};
