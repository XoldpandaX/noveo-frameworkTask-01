<template lang="pug">
  .card-edit
    card(:transformComponent="'edit-form-card'",
         :editData="data")
</template>

<script>
  import Card from '../components/Card/CardForm.vue';

  export default {
    name: 'card-edit',
    props: {
      data: {
        type: Object
      }
    },
    components: {
      Card
    }
  }
</script>
