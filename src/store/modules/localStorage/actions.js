import * as types from './mutation-types.js';

function addToLocalStorageByID({ commit }, data) {
  commit(types.ADD_LOCAL_STORAGE_DATA, data);
}

function deleteFromLocalStorageByID({ commit }, cardID) {
  commit(types.DELETE_LOCAL_STORAGE_DATA, cardID);
}

export default {
  deleteFromLocalStorageByID,
  addToLocalStorageByID
}