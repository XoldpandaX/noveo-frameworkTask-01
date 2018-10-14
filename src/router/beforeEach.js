import { checkUserRoutePermission } from './helpers';

export default function (to, from, next, store, token) {
  if (!token) {
    next();
  } else {
    store.dispatch('auth/getLoggedInUserData');
    const userRole = store.getters['auth/userRole'];
    const isRouteForbidden = checkUserRoutePermission(to.meta.forbiddenFor, userRole);
    isRouteForbidden ? next(from.path) : next();
  }
};
