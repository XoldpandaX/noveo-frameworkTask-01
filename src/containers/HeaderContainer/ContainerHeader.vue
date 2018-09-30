<template lang="pug">
  .container-header
    .container-header__inner
      logo(class="-margin-auto-right") Materializer
      navigation
</template>

<script>
import Logo from '../../components/Logo/Logo.vue';
import Navigation from '../../components/Navigations/Navigation.vue';

export default {
  name: 'ContainerHeader',

  components: {
    Logo,
    Navigation
  }
};
</script>
