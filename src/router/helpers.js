function isRouteAvalible (forbiddenFor, userRole) {
  return forbiddenFor.length > 0 ? forbiddenFor.some(forbidden => forbidden === userRole) : false;
}

export {
  isRouteAvalible
};
