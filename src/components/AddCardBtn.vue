<template lang="pug">
  .add-card-btn(@click="redirect")
    svg.icon-plus
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