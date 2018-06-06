<template lang="pug">
  .container-header
    logo(class="-margin-auto-right") Materializer
    navigation
</template>

<script>
  import Logo from '../../components/Logo/Logo.vue';
  import Navigation from '../../components/Navigations/Navigation.vue';

  export default {
    name: 'container-header',

    components: {
      Logo,
      Navigation
    }
  }
</script>