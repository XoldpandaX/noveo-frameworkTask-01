import { isRouteAvalible } from './helpers';
import LocalStorage from '../services/localStorageProvider';

export default function (to, from, next, store) {
  store.dispatch('auth/checkUserRole');
  isRouteAvalible(to.meta.forbiddenFor, LocalStorage.getItem('userRole')) ? next(from.path) : next();
};
