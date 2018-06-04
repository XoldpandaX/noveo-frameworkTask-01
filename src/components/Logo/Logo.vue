<template lang="pug">
  router-link(to="/",
              tag="span",
              class="logo")
    slot
</template>

<script>
  export default {
    data() {
      return {
      };
    }
  }
</script>