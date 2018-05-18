<template lang="pug">
  .card-list
    h1 Card List
    .card-list__add-card-btn
      add-card-btn
    .card-list__element
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
