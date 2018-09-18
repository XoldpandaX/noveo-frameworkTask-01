import Vue from 'vue';
import Router from 'vue-router';
import { store } from '../store';
import LocalStorageProvider from '../services/localStorageProvider.js';

// route-level
import PageHome from '../views/PageHome.vue';
import PageNewCard from '../views/PageNewCard.vue';
import PageEditCard from '../views/PageEditCard.vue';
import PageSignUp from '../views/PageSignUp.vue';
import PageSignIn from '../views/PageSignIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
      beforeEnter(to, from, next) {
        if (LocalStorageProvider.getItem('token')) {
          store.dispatch('cards/getCardsFromServer')
            .then(() => {
              next();
            }); // get all cards from server
        } else {
          next();
        }
      }
    },
    {
      path: '/new-card',
      name: 'new-card',
      component: PageNewCard
    },
    {
      path: '/edit-card/:id',
      name: 'edit-card',
      component: PageEditCard,
      props: (route) => ({
        id: route.params.id
      })
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PageSignUp
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: PageSignIn
    }
  ]
});
