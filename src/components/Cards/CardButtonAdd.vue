<template lang="pug">
  .card-button-add
    app-button.-round.-no-background-color.-plus(:onClick="redirect")
</template>

<script>
  import AppButton from '../AppButton.vue';

  export default {
    name: "CardButtonAdd",

    components: {
      AppButton
    },

    methods: {
      redirect() {
        this.$router.push({name: 'add-new-card'});
      }
    }
  }
</script>