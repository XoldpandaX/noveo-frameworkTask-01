<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        card-button-add
      .card-list__element(v-for="card in cards")
        card-text(:cardData="card", :key="card.id")
</template>

<script>
  import { mapGetters } from 'vuex';
  import CardButtonAdd from '../../components/Cards/CardButtonAdd.vue';
  import CardText from '../../components/Cards/CardText.vue';

  export default {
    name: 'card-list',

    components: {
      CardButtonAdd,
      CardText
    },

    computed: {
      ...mapGetters('cards', ['cards'])
    }
  };
</script>
