<template lang="pug">
  div(id="app")
    container-header
    main.main-content
      .container
        transition(name="router-anim")
          router-view
    container-modal-wrapper
</template>

<script>
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

  .router-anim-enter-active {
    animation: coming 1s;
    //animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-90%);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-90%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
