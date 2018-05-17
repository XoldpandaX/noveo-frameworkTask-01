<template lang="pug">
  .card-list
    .card-list__add-card-btn
      add-card-btn
    .card-list__element
      p dss
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
