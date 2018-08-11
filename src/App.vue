<template lang="pug">
  div(id="app")
    container-header
    main-layout
    container-modal-wrapper
    loader
</template>

<script>
  import { mapActions } from 'vuex';
  import MainLayout from './components/Base/MainLayout.vue';
  import ContainerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
  import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';
  import Loader from './components/Loaders/Loader.vue';
  import LocalStorageProvider from './services/localStorageProvider'

  export default {
    name: 'app',

    components: {
      MainLayout,
      ContainerModalWrapper,
      ContainerHeader,
      Loader
    },

    methods: {
      ...mapActions('cards', ['cardsDataInit']),
      ...mapActions('ui', ['showModal', 'toggleLoader']),
      ...mapActions('auth', ['getLoginUserData']),

      getUserData() {
        this.toggleLoader();
        this.getLoginUserData().then(() => {
          this.toggleLoader();
        });
      }
    },

    created() {
      if (LocalStorageProvider.getItem('token')) {
        this.getUserData();
      }

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
