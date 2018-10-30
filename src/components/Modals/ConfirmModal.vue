<template lang="pug">
  .confirm-modal
    .confirm-modal__inner
      h3 {{ title }}
      .confirm-modal__button-row
        button.app-button(@click="leftButtonAction") {{ leftButtonText }}
        button.app-button(@click="rightButtonAction") {{ rightButtonText }}
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
    title () {
      return this.config.title;
    },
    leftButtonText () {
      return this.config.leftButton.text;
    },
    rightButtonText () {
      return this.config.rightButton.text;
    },
    leftButtonAction () {
      return this.config.leftButton.action;
    },
    rightButtonAction () {
      return this.config.rightButton.action;
    }
  }
};
</script>
