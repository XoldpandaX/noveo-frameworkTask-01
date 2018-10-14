import isPlainObject from 'lodash/isPlainObject';

export default function (store) {
  return (err) => {
    store.dispatch('ui/toggleLoader');
    const errNum = err.response.status;
    const errMsg = err.response.data.errors;
    if (isPlainObject(errMsg)) {
      for (let key in errMsg) {
        store.dispatch('ui/showNotification', {
          errNum,
          errMsg: errMsg[key].length === 1 ? errMsg[key][0] : 'errors array contains more than one error'
        });
      }
    } else {
      store.dispatch('ui/showNotification', {
        errNum,
        errMsg
      });
    }
  };
}
