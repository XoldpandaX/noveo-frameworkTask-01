<template lang="pug">
  .card-button-add
    app-button(:onClick="redirect",
               :propButtonType="buttonAppearence")
</template>

<script>
import AppButton from '../AppButton.vue';

export default {
  name: 'ButtonCardAdd',

  components: {
    AppButton
  },

  data () {
    return {
      buttonAppearence: 'roundWithPlusIcon'
    };
  },

  methods: {
    redirect () {
      this.$router.push({ name: 'new-card' });
    }
  }
};
</script>
