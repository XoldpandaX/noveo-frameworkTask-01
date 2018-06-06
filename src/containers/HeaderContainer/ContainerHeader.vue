<template lang="pug">
  .container-header
    logo(class="container-header__element") Materializer
    navigation(class="container-header__element")
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