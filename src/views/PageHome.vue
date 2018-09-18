<template lang="pug">
  section.home.page
    h1.page__title Card List
    card-list
    div(v-if="!isAuthenticated")
      h2 if you wont to see the content, please log in ;)
</template>

<script>
  import { mapGetters } from 'vuex';
  import CardList from '../components/Cards/CardList.vue';

  export default {
    name: 'PageHome',

    components: {
      CardList
    },

    computed: {
      ...mapGetters('auth', ['isAuthenticated'])
    }
  }
</script>
