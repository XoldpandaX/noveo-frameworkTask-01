import isNull from 'lodash/isNull.js';

const getIndexOfDataById = Symbol('getIndexOfDataById');
const setNewData = Symbol('setNewData');

class localStorageInstance {
  constructor(storageKey) {
    this._data = localStorageInstance.dataInit(storageKey);
    this._key = storageKey;
  }
  
  //static methods
  static dataInit(localStorageKey) {
    let localStorageData = JSON.parse(localStorage.getItem(localStorageKey));
    return isNull(localStorageData) ? [] : localStorageData;
  }
  
  //private methods
  [getIndexOfDataById](localStorageData, id) {
    return id ? localStorageData.findIndex(el => el.id === id) : -1;
  }
  
  [setNewData](localStorageKey, data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }
  
  //public methods
  addData(newData, id) {
    const currData = this._data;
    const index = this[getIndexOfDataById](currData, id);
    index >= 0 ? currData.splice(index, 1, newData) : currData.push(newData);
    
    this[setNewData](this._key, currData);
  }
  
  deleteData(id) {
    const currData = this._data;
    const index = this[getIndexOfDataById](currData, id);
    
    currData.splice(index, 1);
    this[setNewData](this._key, currData);
  }
  
  get getData() {
    return [...this._data];
  }
}

export default new localStorageInstance('cards');