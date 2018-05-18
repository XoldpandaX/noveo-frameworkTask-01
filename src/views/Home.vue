<template lang="pug">
  section.home
    .container
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
