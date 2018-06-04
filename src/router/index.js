import Vue from 'vue';
import Router from 'vue-router';

// route-level
import Home from '../views/Home.vue';
import AddNewCard from '../views/AddNewCard.vue';
import EditCard from '../views/EditCard.vue';

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
      path: '/edit-card/:id',
      name: 'edit-card',
      component: EditCard,
      props: (route) => ({
        id: route.params.id
      })
    }
  ]
});
