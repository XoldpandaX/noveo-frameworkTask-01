<template lang="pug">
  .card-form
    form
      card(transformComponent="add-form-card")
</template>

<script>
  import Card from '../../components/Cards/CardForm.vue';

  export default {
    name: "card-form",

    components: {
      Card
    }
  }
</script>