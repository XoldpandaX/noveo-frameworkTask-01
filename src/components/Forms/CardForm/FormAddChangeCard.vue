<template lang="pug">
  form.new-card
    .new-card__row
      input(type="text",
            placeholder="Enter title",
            maxlength="42",
            v-model="userInput.title")
    .new-card__row
      textarea(placeholder="Enter description",
               :maxlength="maxSymbols",
               v-model="userInput.description")
      span.new-card__counter {{ symbolsLeft }}/{{ maxSymbols }}
    .app-button__row
      FormButtonSave
</template>
<script>
  import FormButtonSave from './FormButtonSave.vue';
  import { mapGetters, mapActions } from 'vuex';
  import { getRandomID } from '../../../helpers/index.js';

  export default {
    name: 'FormNewCard',

    components: {
      FormButtonSave
    },

    data() {
      return {
        maxSymbols: 196,
        userInput: {
          title: '',
          description: ''
        }
      };
    },

    computed: {
      symbolsLeft() {
        return this.userInput.description.length;
      }
    }
  }
</script>