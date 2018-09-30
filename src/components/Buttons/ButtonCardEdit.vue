<template lang="pug">
  AppButton(:onClick="checkAndRedirect",
            :propButtonType="buttonAppearence",
            :size="buttonSize")
</template>

<script>
import AppButton from '../AppButton.vue';
import mixins from '../../mixins';

export default {
  name: 'ButtonCardEdit',

  components: {
    AppButton
  },

  mixins: [mixins.checkAdmin],

  props: {
    cardID: {
      type: [String, Number],
      required: true
    }
  },

  data () {
    return {
      buttonAppearence: 'editButton',
      buttonSize: {
        width: '25px',
        height: '25px'
      }
    };
  },

  methods: {
    redirectToEditPage () {
      this.$router.push({ path: `/edit-card/${this.cardID}` });
    },

    checkAndRedirect () {
      this.$_checkAdminMixin_enableFunctionComplete(this.redirectToEditPage);
    }
  }
};
</script>
