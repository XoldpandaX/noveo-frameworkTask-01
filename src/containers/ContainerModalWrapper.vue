<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0")
    template(v-for="modal in modals")
      component(:is="modal.id",  @closeModal="closeModal")
</template>

<script>
  import FirstLoadModal from './../components/Modal/FirstLoadModal.vue';
  import { mapGetters, mapActions } from 'vuex';

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