<template lang="pug">
  .card-edit
    <!--card-form(transformComponent="'edit-form-card'",-->
              <!--:editData="data")-->
    card-form(transformComponent="'edit-form-card'",
              :cardData="data")
</template>

<script>
  import CardForm from '../components/Card/CardForm.vue';

  export default {
    name: 'card-edit',
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
