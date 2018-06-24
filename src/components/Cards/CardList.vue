<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        card-button-add
      .card-list__element(v-for="card in cards")
        card-info(:cardData="card",
                  :key="card.id")
</template>

<script>
  import CardButtonAdd from './CardButtonAdd.vue';
  import CardInfo from './CardInfo.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'CardList',

    components: {
      CardButtonAdd,
      CardInfo
    },

    computed: {
      ...mapGetters('cards', ['cards'])
    }
  };
</script>