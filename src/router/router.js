import Vue from 'vue';
import Router from 'vue-router';

// route-level
const Home = () => import('../views/Home.vue');
const AddNewCard = () => import('../views/AddNewCard.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-card',
      name: 'add-new-card',
      component: AddNewCard
    }
  ]
});
