<template lang="pug">
  nav.navigation
    ul
      template(v-if="userRole === 'user' || userRole === 'admin'")
        li(v-for="el in navigation",
           :key="el.id",
           @click="switchActions(el.action)",
           class="navigation__element") {{ el.title }}
          div.navigation__icon(:class="el.iconClass")
      template(v-else)
        router-link(v-for="el in navigation",
                    :key="el.id",
                    :to="el.route !== '' ? el.route : ''",
                    tag="li",
                    class="navigation__element") {{ el.title }}
          div.navigation__icon(:class="el.iconClass")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters('ui', ['navigation']),
    ...mapGetters('auth', ['userRole'])
  },

  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('ui', ['changeNavigation', 'showModal']),

    switchActions (action) {
      switch (action) {
        case 'exit':
          this.exit();
          break;
        case 'profile':
          this.showModal('profile-modal');
          break;
      }
    },

    exit () {
      this.logout().then(() => {
        this.changeNavigation();
        this.$router.push('/');
        window.location.reload();
      });
    }
  }
};
</script>
