<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        add-card-btn
      .card-list__element(v-for="card in cards")
        card-text(:cardData="card", :key="card.id")
</template>

<script>
  import {mapGetters} from 'vuex';
  import AddCardBtn from './../components/AddCardBtn.vue';
  import CardText from '../components/Card/CardText.vue';

  export default {
    name: 'card-list',

    components: {
      AddCardBtn,
      CardText
    },

    computed: {
      ...mapGetters('cards', ['cards'])
    }
  };
</script>
