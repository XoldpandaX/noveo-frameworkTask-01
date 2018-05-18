<template lang="pug">
  section.home.page
    .container
      h1 Card List
      card-list
</template>

<script>
  import CardList from './../containers/CardList.vue';

  export default {
    name: 'home',
    components: {
      CardList
    }
  }
</script>
