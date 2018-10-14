import { checkUserRoutePermission } from './helpers';

export default function (to, from, next, store) {
  store.dispatch('auth/changeAuthStatus');
  const userRole = store.getters['auth/userRole'];
  const isRouteForbidden = checkUserRoutePermission(to.meta.forbiddenFor, userRole);
  isRouteForbidden ? next(from.path) : next();
};
