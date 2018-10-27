<template lang="pug">
  .confirm-modal
    .confirm-modal__inner
      h3 {{ config.title }}
      .confirm-modal__button-row
        button.app-button(@click="config.leftButton.action") {{ leftButtonText }}
        button.app-button(@click="config.rightButton.action") {{ rightButtonText }}
</template>

<script>
export default {
  name: 'ConfirmModal',

  props: {
    config: {
      type: Object
    }
  },
  computed: {
    leftButtonText () {
      return this.config.leftButton.text;
    },
    rightButtonText () {
      return this.config.rightButton.text;
    }
  }
};
</script>
