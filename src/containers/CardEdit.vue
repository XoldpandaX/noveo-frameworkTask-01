<template lang="pug">
  .card-edit
    card(:transformComponent="'edit-form-card'")
</template>

<script>
  import Card from './../components/Card/Card.vue';

  export default {
    name: 'card-edit',
    components: {
      Card
    }
  }
</script>
