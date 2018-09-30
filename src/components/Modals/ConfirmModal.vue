<template lang="pug">
  .confirm-modal
    .confirm-modal__inner
      h3 {{ title }}
      .confirm-modal__button-row
        button.app-button move and delete
        button.app-button stay and save
</template>

<script>
export default {
  name: 'ConfirmModal',

  data () {
    return {
      title: `If you go to another page then the data will not be saved !\n Are you sure ?`
    };
  }
};
</script>
