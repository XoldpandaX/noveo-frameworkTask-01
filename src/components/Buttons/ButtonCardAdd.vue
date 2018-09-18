<template lang="pug">
  .card-button-add
    app-button(:onClick="checkAndRedirect",
               :propButtonType="buttonAppearence")
</template>

<script>
  import AppButton from '../AppButton.vue';
  import mixins from '../../mixins';

  export default {
    name: 'ButtonCardAdd',

    components: {
      AppButton
    },

    mixins: [mixins.checkAdmin],

    data() {
      return {
        buttonAppearence: 'roundWithPlusIcon'
      };
    },

    methods: {
      checkAndRedirect() {  // check user role if success then redirect
        this.$_checkAdminMixin_enableFunctionComplete(this.redirectFunction);
      },

      redirectFunction() {
        this.$router.push({name: 'new-card'});
      }
    }
  };
</script>
