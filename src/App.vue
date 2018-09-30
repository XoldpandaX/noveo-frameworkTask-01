<template lang="pug">
  div(id="app")
    container-header
    main-layout
    container-modal-wrapper
    loader
    notification-service
</template>

<script>
import { mapActions } from 'vuex';
import LocalStorageProvider from './services/localStorageProvider';
import MainLayout from './components/Base/MainLayout.vue';
import ContainerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';
import Loader from './components/Loaders/Loader.vue';
import NotificationService from './components/Notifications/NotificationService.vue';

export default {
  name: 'App',

  components: {
    MainLayout,
    ContainerModalWrapper,
    ContainerHeader,
    Loader,
    NotificationService
  },

  methods: {
    ...mapActions('ui', ['showModal', 'toggleLoader']),
    ...mapActions('auth', ['getLoginUserData']),

    getUserData () {
      // this.toggleLoader();
      // this.getLoginUserData().then(() => {
      //   this.toggleLoader();
      // });
      this.getLoginUserData();
    }
  },

  created () {
    if (LocalStorageProvider.getItem('token')) {
      this.getUserData();
    }

    setTimeout(() => {
      this.showModal('first-load-modal');
    }, 750);
  }
};
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';

  .animated {
    animation-duration: .7s;
    animation-fill-mode: both;
  }
</style>
