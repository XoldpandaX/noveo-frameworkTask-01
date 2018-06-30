<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      form-add-change-card
</template>

<script>
  import FormAddChangeCard from '../components/Forms/CardForm/FormAddChangeCard.vue';

  export default {
    name: 'PageNewCard',

    components: {
      FormAddChangeCard
    }
  }
</script>
