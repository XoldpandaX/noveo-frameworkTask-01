<template lang="pug">
  .confirm-modal
    .confirm-modal__inner
      h3 {{ title }}
      .confirm-modal__button-row
        button.app-button(@click="checkAnswerAndCloseModal(true)") move and delete
        button.app-button(@click="checkAnswerAndCloseModal(false)") stay and save
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ConfirmModal',

  props: {
    config: {
      type: Object
    }
  },

  data () {
    return {
      title: `If you go to another page then the data will not to be saved !\n Are you sure ?`
    };
  },

  methods: {
    ...mapActions('ui', ['closeAllModals']),
    checkAnswerAndCloseModal (changeRoute) {
      this.closeAllModals();
      this.config.action(changeRoute);
    }
  }
};
</script>
