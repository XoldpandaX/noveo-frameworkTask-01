import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { defaultState } from './defaultState';

const state = {
  ...defaultState
};

export default {
  namespaced: true,

  state,
  actions,
  mutations,
  getters
};
