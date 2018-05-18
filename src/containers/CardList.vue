<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        add-card-btn
      .card-list__element(v-for="el in 3")
        card
</template>

<script>
  import AddCardBtn from './../components/AddCardBtn.vue';
  import Card from './../components/Card.vue';

  export default {
    name: 'card-list',
    components: {
      AddCardBtn,
      Card
    }
  };
</script>
