import { isUndefined } from 'lodash';

class LocalStorageProvider {
  constructor () {
    Object.keys(localStorage).map(key => this[`_${key}`] = localStorage.getItem(key));
  }

  getItem (key) {
    return this[`_${key}`];
  }

  getParseItem (key) {
    return JSON.parse(this[`_${key}`]);
  }

  setItem (key, val) {
    this[`_${key}`] = val;
    localStorage.setItem(key, val);
    return this;
  }

  setStringifyItem (key, val) {
    const stringifyVal = JSON.stringify(val);
    this[`_${key}`] = stringifyVal;
    localStorage.setItem(key, stringifyVal);
  }

  setObjItemInArray (key, val) {
    let currData = isUndefined(this[`_${key}`]) ? [] : this.getParseItem(key);
    const itemIndex = this._findItemIndexById(currData, val.id);

    switch (itemIndex) {
      case -1:
        currData.push(val);
        break;
      default:
        currData.splice(itemIndex, 1, val);
    }
    this.setStringifyItem(key, currData);
  }

  removeItem (key) {
    delete this[key];
    localStorage.removeItem(key);
  }

  removeObjItemFromArray (key, id) {
    let currData = this.getParseItem(key);
    const itemIndex = this._findItemIndexById(currData, id);

    currData.splice(itemIndex, 1);
    this.setStringifyItem(key, currData);
  }

  // PRIVATE METHODS
  _findItemIndexById (searchArray, id) {
    return searchArray.findIndex(el => el.id === id);
  }
}

export default new LocalStorageProvider();
