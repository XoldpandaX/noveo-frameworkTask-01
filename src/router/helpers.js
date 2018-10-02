import { valuesIn } from 'lodash';

function checkUserPermissionToTransition (forbiddenFor, userRole) {
  const arrOfObjectValues = valuesIn(forbiddenFor);
  if (arrOfObjectValues.length > 0) {
    return forbiddenFor.some(forbidden => forbidden === userRole);
  } else {
    return false;
  }
}

export {
  checkUserPermissionToTransition
};
