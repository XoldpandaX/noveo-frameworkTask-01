<template lang="pug">
  div(id="app")
    modals
    transition(name="router-animation"
               enter-active-class="animated fadeInLeft"
               leave-active-class="animated fadeOutRight")
      router-view
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Modals from './containers/ModalWrapper.vue';

  export default {
    name: 'app',
    components: {
      Modals
    },
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

  /*.col {*/
    /*position: fixed;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-color: black;*/
    /*z-index: 500;*/

    /*div {*/
      /*width: 100px;*/
      /*height: 100px;*/
      /*background-color: red;*/
      /*z-index: 1000;*/
      /*position: absolute;*/
      /*top: calc(50% - 50px);*/
      /*left: calc(50% - 50px);*/
      /*margin: 0;*/
    /*}*/

  //}
</style>
