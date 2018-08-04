import {
  isUndefined
} from 'lodash';

class LocalStorageProvider {
  constructor() {
    Object.keys(localStorage).map(key => this[`_${key}`] = localStorage.getItem(key));
  }
  
  getItem(key) {
    return this[`_${key}`];
  }
  
  getParseItem(key) {
    return JSON.parse(this[`_${key}`]);
  }
  
  setItem(key, val) {
    this[`_${key}`] = val;
    localStorage.setItem(key, val);
    
    return this;
  }
  
  setObjItemInArray(key, val) {
    let currData = isUndefined(this[`_${key}`]) ? [] : JSON.parse(this[`_${key}`]);
    const itemId = val.id;
    const itemIndex = this._findItemIndexById(currData, itemId);
    
    switch (itemIndex) {
      case itemIndex >= 0:
        currData.splice(itemIndex, 1, val);
        break;
      default:
        currData.push(val);
    }
  
    currData = JSON.stringify(currData);
    this.setItem(key, currData);
  }
  
  removeItem(key) {
    delete this[key];
    localStorage.removeItem(key);
  }
  
  // PRIVATE METHODS
  _findItemIndexById(searchArray, id) {
    return id ? searchArray.findIndex(el => el.id === id) : -1;
  }
}

export default new LocalStorageProvider();