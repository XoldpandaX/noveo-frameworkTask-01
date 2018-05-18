<template lang="pug">
  .card-list
    h1 Card List
    .card-list__cards-container
      .card-list__element
        add-card-btn
      .card-list__element(v-for="el in 7") {{ el }}
</template>

<script>
  import AddCardBtn from './../components/AddCardBtn.vue';

  export default {
    name: 'card-list',
    components: {
      AddCardBtn
    }
  }
</script>
