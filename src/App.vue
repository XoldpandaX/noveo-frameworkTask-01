<template lang="pug">
  div(id="app")
    container-header
    main.main-content
      .layout-container
        transition(name="router-animation",
                   enter-active-class="animated fadeInLeft",
                   leave-active-class="animated fadeOutRight")
          router-view
    container-modal-wrapper
</template>

<script>
  import { mapActions } from 'vuex';
  import ContainerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
  import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';

  export default {
    name: 'app',

    components: {
      ContainerModalWrapper,
      ContainerHeader
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
