<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0")
    template(v-if="modal.id", v-for="modal in modals")
      first-load-modal(v-if="modal.id === 'first-load-modal'", @closeModal="closeModal")
</template>

<script>
  import FirstLoadModal from './../components/Modal/FirstLoadModal.vue';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'container-modal-wrapper',

    components: {
      FirstLoadModal
    },

    computed: {
      ...mapGetters('ui', ['modals'])
    },

    methods: {
      ...mapActions('ui', ['closeAllModals']),

      closeModal() {
        this.closeAllModals();
      }
    }
  }
</script>