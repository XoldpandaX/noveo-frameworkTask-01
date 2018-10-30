import Vue from 'vue';
import Router from 'vue-router';
import { store } from '../store';
import LocalStorageProvider from '../services/localStorageProvider';

// route-level
import PageHome from '../views/Home.vue';
import PageNewCard from '../views/NewCard.vue';
import PageEditCard from '../views/EditCard.vue';
import PageSignUp from '../views/SignUp.vue';
import PageSignIn from '../views/SignIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
      meta: {
        forbiddenFor: []
      },
      async beforeEnter (to, from, next) {
        if (LocalStorageProvider.getItem('token')) {
          await store.dispatch('cards/getCardsFromServer');
          next();
        } else {
          next();
        }
      }
    },
    {
      path: '/new-card',
      name: 'new-card',
      component: PageNewCard,
      meta: {
        forbiddenFor: [
          'user',
          'guest'
        ]
      }
    },
    {
      path: '/edit-card/:id',
      name: 'edit-card',
      component: PageEditCard,
      props: (route) => ({
        id: route.params.id
      }),
      meta: {
        forbiddenFor: [
          'user',
          'guest'
        ]
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: PageSignUp,
      meta: {
        forbiddenFor: []
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: PageSignIn,
      meta: {
        forbiddenFor: []
      }
    }
  ]
});
