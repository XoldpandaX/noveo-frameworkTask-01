import Vue from 'vue';
import Router from 'vue-router';

// route-level
import PageHome from '../views/PageHome.vue';
import PageNewCard from '../views/PageHome.vue';
import PageEditCard from '../views/PageEditCard.vue';
import PageSignIn from '../views/PageSignIn.vue';

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
