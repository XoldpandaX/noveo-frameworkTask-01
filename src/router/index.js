import Vue from 'vue';
import Router from 'vue-router';

import PageSignIn from '../views/PageSignIn.vue';

// route-level
const PageHome = () => import('../views/PageHome.vue');
const PageNewCard = () => import('../views/PageNewCard.vue');
const PageEditCard = () => import('../views/PageEditCard.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
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
      name: 'sign-up'
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: PageSignIn
    }
  ]
});
