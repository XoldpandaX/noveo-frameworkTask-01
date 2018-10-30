<template lang="pug">
  .container-header
    .container-header__inner
      logo-main(class="-margin-auto-right") Materializer
      navigation-main
</template>

<script>
import LogoMain from '../../components/Logo/LogoMain';
import NavigationMain from '../../components/Navigations/NavigationMain';

export default {
  name: 'ContainerHeader',
  components: {
    LogoMain,
    NavigationMain
  }
};
</script>
