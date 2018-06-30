<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        button-card-add
      .card-list__element(v-for="card in cards")
        card-info(:cardData="card",
                  :key="card.id")
</template>

<script>
  import ButtonCardAdd from '../Buttons/ButtonCardAdd.vue';
  import CardInfo from './CardInfo.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'CardList',

    components: {
      ButtonCardAdd,
      CardInfo
    },

    computed: {
      ...mapGetters('cards', ['cards'])
    }
  };
</script>