<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      card-form
    form-new-card
</template>

<script>
  import CardForm from '../containers/CardContainers/ContainerCardForm.vue';
  import FormNewCard from '../components/Forms/FormNewCard/FormNewCard.vue';

  export default {
    name: 'add-new-card',

    components: {
      CardForm,
      FormNewCard
    }
  }
</script>
