<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0", @click="closeModal")
    template(v-for="modal in modals")
      component(:is="modal.id",  @closeModal="closeModal")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import FirstLoadModal from '../../components/Modals/FirstLoadModal.vue';
  import ProfileModal from '../../components/Modals/ProfileModal.vue';

  export default {
    name: 'ContainerModalWrapper',

    components: {
      FirstLoadModal,
      ProfileModal
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