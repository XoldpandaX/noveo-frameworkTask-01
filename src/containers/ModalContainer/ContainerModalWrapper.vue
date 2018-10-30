<template lang="pug">
  .modal-wrapper(v-if="modals.length > 0")
    template(v-for="modal in modals")
      component(
      :is="modal.id"
      :key="modal.id"
      :config="modal.config"
      @closeModal="closeAllModals"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FirstLoadModal from '../../components/Modals/FirstLoadModal';
import ProfileModal from '../../components/Modals/ProfileModal';
import ConfirmModal from '../../components/Modals/ConfirmModal';

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
