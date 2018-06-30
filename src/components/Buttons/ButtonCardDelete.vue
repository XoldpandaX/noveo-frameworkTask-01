<template lang="pug">
  app-button(:onClick="deleteCard",
             :propButtonType="buttonAppearence") Delete
</template>

<script>
  import { mapActions } from 'vuex';
  import AppButton from '../AppButton.vue';

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
  };
</script>