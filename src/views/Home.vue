<template lang="pug">
  section.home.page
    h1 Card List
    container-card-list
    CardButtonAdd
</template>

<script>
  import ContainerCardList from '../containers/CardContainers/ContainerCardList.vue';
  import CardButtonAdd from '../components/Cards/CardButtonAdd';

  export default {
    name: 'home',

    components: {
      ContainerCardList,
      CardButtonAdd
    }
  }
</script>
