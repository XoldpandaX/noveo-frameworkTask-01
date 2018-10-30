<template lang="pug">
  div(id="app")
    container-header
    main-layout
    container-modal-wrapper
    loader-global
    notification-service
</template>

<script>
import { mapActions } from 'vuex';
import MainLayout from './components/Base/MainLayout.vue';
import ContainerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';
import LoaderGlobal from './components/Loaders/LoaderGlobal.vue';
import NotificationService from './components/Notifications/NotificationService.vue';
import LocalStorage from './services/localStorageProvider';

export default {
  name: 'App',
  components: {
    MainLayout,
    ContainerModalWrapper,
    ContainerHeader,
    LoaderGlobal,
    NotificationService
  },
  mounted () {
    if (!LocalStorage.getItem('firstLoad')) {
      this.showModal({ id: this.$appConstants.modalNames.firstLoad, config: {} });
      LocalStorage.setItem('firstLoad', 'true');
    }
  },
  methods: {
    ...mapActions('ui', ['showModal'])
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
