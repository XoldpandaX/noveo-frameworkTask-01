<template lang="pug">
  section.home.page
    h1.page__title Card List
    card-list
</template>

<script>
  import CardList from '../components/Cards/CardList.vue';

  export default {
    name: 'Home',

    components: {
      CardList
    }
  }
</script>
