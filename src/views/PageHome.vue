<template lang="pug">
  section.home.page
    template(v-if="!isAuthenticated")
      h2 if you wont to see the content, please log in ;)
    template(v-else)
      h1.page__title Card List
      .home__head-row
        button-sort
        .home__layout-buttons
          button display list
          button display row
      card-list
</template>

<script>
import { mapGetters } from 'vuex';
import CardList from '../components/Cards/CardList.vue';
import ButtonSort from '../components/Buttons/ButtonSortCardByDate.vue';

export default {
  name: 'PageHome',

  components: {
    CardList,
    ButtonSort
  },

  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('ui', ['cardsLayout'])
  }
};
</script>
