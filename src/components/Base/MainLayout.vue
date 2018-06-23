<template lang="pug">
  main.main-content
    .layout-container
      transition(name="router-animation",
                 enter-active-class="animated fadeInLeft",
                 leave-active-class="animated fadeOutRight")
        router-view
</template>

<script>
  export default {
    name: "MainLayout"
  }
</script>