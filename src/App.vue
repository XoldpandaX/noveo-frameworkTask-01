<template lang="pug">
  div(id="app")
    modals
    transition(name="router-animation",
               enter-active-class="animated fadeInLeft",
               leave-active-class="animated fadeOutRight")
      router-view
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Modals from './containers/ContainerModalWrapper.vue';

  export default {
    name: 'app',

    components: {
      Modals
    },

    computed: {
      ...mapGetters('cards', ['cards'])
    },

    methods: {
      ...mapActions('cards', ['cardsDataInit']),
      ...mapActions('ui', ['showModal'])
    },

    created() {
      this.cardsDataInit();
      setTimeout(() => {
        this.showModal('first-load-modal');
      }, 750);
    },

    updated() {
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
