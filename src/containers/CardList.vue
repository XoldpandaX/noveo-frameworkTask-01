<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        add-card-btn
      .card-list__element(v-for="card in cards")
        card(:cardData="card", :key="card.id")
</template>

<script>
  import {mapGetters} from 'vuex';
  import AddCardBtn from './../components/AddCardBtn.vue';
  import Card from './../components/Card.vue';

  export default {
    name: 'card-list',
    components: {
      AddCardBtn,
      Card
    },
    computed: {
      ...mapGetters('cards', ['cards'])
    }
  };
</script>
