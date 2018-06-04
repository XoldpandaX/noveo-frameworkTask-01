<template lang="pug">
  section.home.page
    .container
      h1 Card List
      container-card-list
</template>

<script>
  import ContainerCardList from '../containers/CardContainers/ContainerCardList.vue';

  export default {
    name: 'home',

    components: {
      ContainerCardList
    }
  }
</script>
