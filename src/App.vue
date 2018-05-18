<template lang="pug">
  div(id="app")
    transition(name="router-animation"
               enter-active-class="animated fadeInDown"
               leave-active-class="animated fadeOutDown")
      router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';

  .animated {
    animation-duration: .7s;
    animation-fill-mode: both;
  }
</style>
