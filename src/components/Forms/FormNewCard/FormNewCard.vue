<template lang="pug">
  form.new-card
    .new-card__row
      input(type="text",
            placeholder="Enter title",
            maxlength="42")
    .new-card__row
      textarea(placeholder="Enter description",
               maxlength="maxSymbols")
      span.new-card__counter 0/196
    .app-button__row
      FormButtonSave
</template>
<script>
  import FormButtonSave from './FormButtonSave.vue';

  export default {
    name: 'FormNewCard',

    components: {
      FormButtonSave
    }
  }
</script>