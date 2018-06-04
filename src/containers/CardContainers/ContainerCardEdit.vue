<template lang="pug">
  .card-edit
    card-form(transformComponent="edit-form-card",
              :cardData="data")
</template>

<script>
  import CardForm from '../../components/Cards/CardForm.vue';

  export default {
    name: 'container-card-edit',

    props: {
      data: {
        type: Object
      }
    },

    components: {
      CardForm
    }
  }
</script>
