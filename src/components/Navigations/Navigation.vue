<template lang="pug">
  nav.navigation
    ul
      router-link(v-for="el in navigation",
                  to="#",
                  tag="li",
                  class="navigation__element") {{ el.title }}
        div.navigation__icon(:class="el.iconClass")
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'navigation',

    computed: {
      ...mapGetters('ui', ['navigation'])
    }
  }
</script>