<template lang="pug">
  app-button(:onClick="deleteCard",
             :propButtonType="buttonAppearence") Delete
</template>

<script>
  import AppButton from '../AppButton.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'ButtonCardDelete',

    components: {
      AppButton
    },

    props: {
      cardID: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        buttonAppearence: 'formButton'
      };
    },

    methods: {
      ...mapActions('cards', ['deleteCardDataFromStore']),

      deleteCard() {
        this.deleteCardDataFromStore(this.cardID);
        this.$router.push({name: 'home'});
      },
    }
  }
</script>