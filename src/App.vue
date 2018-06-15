<template lang="pug">
  div(id="app")
    container-header
    transition(name="router-animation",
               enter-active-class="animated fadeInLeft",
               leave-active-class="animated fadeOutRight")
      router-view
    container-modal-wrapper
</template>

<script>
  import Vue from 'vue';
  import { mapActions } from 'vuex';
  import containerModalWrapper from './containers/ModalContainer/ContainerModalWrapper.vue';
  import ContainerHeader from './containers/HeaderContainer/ContainerHeader.vue';

  export default {
    name: 'app',

    components: {
      containerModalWrapper,
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

    mounted() {
      Vue.axios
        .get('users?order_by=id&sort=asc&per_page=8')
        .then(response => (console.log(response)));
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
