<template lang="pug">
  .profile-modal
    .cross-btn(@click="closeModal")
    .profile-modal__body
      div(
      v-for="(val, key) in userData"
      :key="key"
      ) {{ `${key}: ${val}` }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfileModal',
  computed: {
    ...mapGetters('auth', ['userData'])
  },
  created () {
    this.loggedInUserData();
  },
  methods: {
    ...mapActions('auth', ['loggedInUserData']),
    closeModal () {
      this.$emit('closeModal');
    }
  }
};
</script>
