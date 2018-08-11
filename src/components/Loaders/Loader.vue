<template lang="pug">
  .loader(v-if="isLoaderActive")
    .loader__mask
      .loader__wrapper
        .loader__content
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Loader',

    computed: {
      ...mapGetters('ui', ['isLoaderActive'])
    }
  }
</script>