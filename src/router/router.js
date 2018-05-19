import Vue from 'vue';
import Router from 'vue-router';

// route-level
const Home = () => import('../views/Home.vue');
const AddNewCard = () => import('../views/AddNewCard.vue');
const EditCard = () => import('../views/EditCard.vue');

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
    },
    {
      path: '/edit-card/:id(\\d+)?',
      name: 'edit-card',
      component: EditCard,
      props: (route) => ({
        id: route.params.id
      })
    }
  ]
});
