<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0")
    template(v-for="modal in modals")
      component(:is="modal.id", :config="modal.config",  @closeModal="closeAllModals")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FirstLoadModal from '../../components/Modals/FirstLoadModal.vue';
import ProfileModal from '../../components/Modals/ProfileModal.vue';
import ConfirmModal from '../../components/Modals/ConfirmModal.vue';

export default {
  name: 'ContainerModalWrapper',

  components: {
    FirstLoadModal,
    ProfileModal,
    ConfirmModal
  },

  computed: {
    ...mapGetters('ui', ['modals'])
  },

  methods: {
    ...mapActions('ui', ['closeAllModals'])
  }
};
</script>
