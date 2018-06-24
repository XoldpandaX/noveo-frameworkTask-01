<template lang="pug">
  AppButton(:onClick="redirectToEditPage",
            :propButtonType="buttonAppearence")
</template>

<script>
  import AppButton from '../AppButton.vue';

  export default {
    name: 'CardButtonEdit',

    components: {
      AppButton
    },

    props: {
      cardID: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        buttonAppearence: 'editButton'
      };
    },

    methods: {
      redirectToEditPage() {
        const id = this.cardID.split('').splice(1).join('');
        this.$router.push({path: `/edit-card/${id}`})
      }
    }
  }
</script>