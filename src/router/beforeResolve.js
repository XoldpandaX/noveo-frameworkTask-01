import { isRouteAvalible } from './helpers';

export default function (to, from, next, store) {
  store.dispatch('auth/changeAuthStatus');
  const userRole = store.getters['auth/userRole'];
  isRouteAvalible(to.meta.forbiddenFor, userRole) ? next(from.path) : next();
};
