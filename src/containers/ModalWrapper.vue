<template lang="pug">
  .modal-wrapper
    first-load-modal
</template>

<script>
  import FirstLoadModal from './../components/Modal/FirstLoadModal.vue';

  export default {
    name: 'modals',
    components: {
      FirstLoadModal
    }
  }
</script>