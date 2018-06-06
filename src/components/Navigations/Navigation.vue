<template lang="pug">
  nav.navigation
    ul
      li.navigation__element(v-for="navEl in navigation") {{ navEl.title }}
        div.navigation__icon(:class="navEl.iconClass")
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