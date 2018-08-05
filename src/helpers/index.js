export function getRandomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function checkObjectFieldsForTrueValue(obj) {
  let falseResult = 0;
  
  for (let key in obj) {
    if (!obj[key]) {
      falseResult++;
    }
  }
  return falseResult <= 0;
}

export function objFieldByValue(searchObj, searchField , value) {
  const index = searchObj.findIndex((el) => el[searchField] === value);
  return searchObj[index].value;
}

export function isObjFieldsAreEmpty(arrOfFields, fieldForCheck) {
  return arrOfFields.some(val => val[fieldForCheck] === '');
}

export function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
