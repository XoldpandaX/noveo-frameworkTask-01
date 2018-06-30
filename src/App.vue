<template lang="pug">
  div(id="app")
    container-header
    main-layout
    container-modal-wrapper
</template>

<script>
  import { mapActions } from 'vuex';
  import MainLayout from './components/Base/MainLayout.vue';
  import ContainerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
  import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';

  export default {
    name: 'app',

    components: {
      MainLayout,
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
