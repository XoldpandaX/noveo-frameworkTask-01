<template lang="pug">
  .card-form
    form
      card(:transformComponent="'form-card'")
</template>

<script>
  import Card from '../components/Card/CardForm.vue';

  export default {
    name: "card-form",
    components: {
      Card
    }
  }
</script>