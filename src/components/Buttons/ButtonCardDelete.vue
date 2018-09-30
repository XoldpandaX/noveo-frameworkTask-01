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
      type: [String, Number],
      required: true
    }
  },

  data () {
    return {
      buttonAppearence: 'formButton'
    };
  },

  methods: {
    ...mapActions('cards', ['removeCard']),

    deleteCard () {
      this.removeCard(this.cardID).then(() => {
        this.$router.push({ name: 'home' });
      });
    }
  }
};
</script>
