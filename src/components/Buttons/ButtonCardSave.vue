<template lang="pug">
  app-button(:onClick="formDataToStore",
             :propButtonType="buttonAppearence") save
</template>

<script>
import AppButton from '../AppButton.vue';

export default {
  name: 'ButtonCardSave',

  components: {
    AppButton
  },

  props: {
    formDataToStore: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      buttonAppearence: 'formButton'
    };
  }
};
</script>
