<template lang="pug">
  div(id="app")
    h1 Card List
    card-list
    div(id="nav")
      router-link(to="/") Home |
      router-link(to="/about") About
    router-view
</template>

<script>
  import CardList from './containers/CardList.vue';

  export default {
    name: 'app',
    components: {
      CardList
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/index.scss';
</style>
