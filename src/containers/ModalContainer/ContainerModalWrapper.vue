<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0")
    template(v-for="modal in modals")
      component(:is="modal.id",  @closeModal="closeModal")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import FirstLoadModal from '../../components/Modals/FirstLoadModal.vue';

  export default {
    name: 'ContainerModalWrapper',

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
  };
</script>