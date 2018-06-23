<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      card-form
</template>

<script>
  import CardForm from '../containers/CardContainers/ContainerCardForm.vue';

  export default {
    name: 'add-new-card',

    components: {
      CardForm
    }
  }
</script>
