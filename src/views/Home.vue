<template lang="pug">
  section.home.page
    template(v-if="!isAuthenticated")
      h2 if you wont to see the content, please log in ;)
    template(v-else)
      h1.page__title Card List
      .home__head-row
        sort-by-date
        .home__layout-buttons
          button(@click="changeCardLayout('list')") display list
          button(@click="changeCardLayout('row')") display row
      card-list(v-if="cardsLayout === 'row'")
      card-list.card-list--list-view(v-else)
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardList from '../components/Cards/CardList.vue';
import SortByDate from '../components/Filters/SortCardsByDate.vue';

export default {
  name: 'PageHome',

  components: {
    CardList,
    SortByDate
  },

  computed: {
    ...mapGetters('auth', ['isAuthenticated']),

    ...mapGetters('ui', ['cardsLayout'])
  },

  methods: {
    ...mapActions('ui', ['changeCardLayout'])
  }
};
</script>
