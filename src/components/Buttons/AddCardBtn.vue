<template lang="pug">
  .add-card-btn
    svg.icon-plus(@click="redirect")
</template>

<script>
  export default {
    name: 'add-card-btn',

    methods: {
      redirect() {
        this.$router.push({name: 'add-new-card'});
      }
    }
  }
</script>