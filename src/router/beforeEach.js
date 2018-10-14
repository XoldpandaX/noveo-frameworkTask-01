import { checkUserPermissionToTransition } from './helpers';

export default function (to, from, next, store, token) {
  if (token) {
    store.dispatch('auth/getLoginUserData').then(() => {
      const userRole = store.getters['auth/userRole'];
      const isRouteForbidden = checkUserPermissionToTransition(to.meta.forbiddenFor, userRole);
      if (isRouteForbidden) {
        next(from.path);
        store.dispatch('ui/showNotification', {
          errNum: 0,
          errMsg: 'Only an administrator can perform these actions.'
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
};
