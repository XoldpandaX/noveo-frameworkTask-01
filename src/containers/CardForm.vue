<template lang="pug">
  .card-form
    form
      card
</template>

<script>
  import Card from './../components/Card.vue';

  export default {
    name: "card-form",
    components: {
      Card
    }
  }
</script>