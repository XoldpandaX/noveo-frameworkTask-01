<template lang="pug">
  nav.navigation
    ul
      template(v-if="userRole === 'guest'")
        router-link(
        v-for="el in navigationElements"
        :key="el.id"
        :to="el.route !== '' ? el.route : ''"
        tag="li"
        class="navigation__element"
        ) {{ el.title }}
          div.navigation__icon(:class="el.iconClass")
      template(v-else)
        li(
        v-for="el in navigationElements"
        :key="el.id"
        @click="switchActions(el.action)"
        class="navigation__element"
        ) {{ el.title }}
          div.navigation__icon(:class="el.iconClass")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters('auth', ['userRole']),
    navigationElements () {
      const { guest, authorized } = this.$appConstants.navigationElements;
      return this.userRole !== 'guest' ? authorized : guest;
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('ui', ['showModal']),
    switchActions (action) {
      switch (action) {
        case 'exit':
          this.exit();
          break;
        case 'profile':
          this.showModal({ id: this.$appConstants.modalNames.profile });
          break;
      }
    },
    async exit () {
      await this.logout();
      this.$router.push('/');
      window.location.reload();
    }
  }
};
</script>
