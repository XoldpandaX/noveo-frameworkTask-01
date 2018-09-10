<template lang="pug">
  AppButton(:onClick="redirectToEditPage",
            :propButtonType="buttonAppearence",
            :size="buttonSize")
</template>

<script>
  import AppButton from '../AppButton.vue';

  export default {
    name: 'ButtonCardEdit',

    components: {
      AppButton
    },

    props: {
      cardID: {
        type: [String, Number],
        required: true
      }
    },

    data() {
      return {
        buttonAppearence: 'editButton',
        buttonSize: {
          width: '25px',
          height: '25px'
        }
      };
    },

    methods: {
      redirectToEditPage() {
        this.$router.push({path: `/edit-card/${this.cardID}`})
      }
    }
  };
</script>
