<template lang="pug">
  app-button(:propButtonType="buttonAppearence") save
</template>

<script>
  import AppButton from '../../AppButton.vue';

  export default {
    name: 'FormButtonSave',

    components: {
      AppButton
    },

    data() {
      return {
        buttonAppearence: 'formButton'
      };
    }
  }
</script>