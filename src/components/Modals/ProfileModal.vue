<template lang="pug">
  .profile-modal
    .cross-btn(@click="closeModal")
    .profile-modal__body
      div(v-for="(val, key) in user") {{ `${key}: ${val}` }}
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ProfileModal',

    computed: {
      ...mapGetters('auth', ['userData'])
    },

    data() {
      return {
        user: {}
      };
    },

    methods: {
      closeModal() {
        this.$emit('closeModal')
      }
    },

    created() {
      this.user = this.userData;
    }
  };
</script>
