<template lang="pug">
  section.add-new-card.page-fixed
    .container
      h1 Add New Card
      .add-new-card__row
        card-form
</template>

<script>
  import CardForm from './../containers/CardForm.vue';

  export default {
    name: 'add-new-card',
    components: {
      CardForm
    }
  }
</script>
