<template lang="pug">
  div(id="app")
    transition(name="router-animation"
               enter-active-class="animated fadeInLeft"
               leave-active-class="animated fadeOutRight")
      router-view
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app',
    computed: {
      ...mapGetters('cards', ['cards'])
    },
    methods: {
      ...mapActions('cards', ['cardsDataInit'])
    },
    created() {
      this.cardsDataInit();
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';

  .animated {
    animation-duration: .7s;
    animation-fill-mode: both;
  }
</style>
