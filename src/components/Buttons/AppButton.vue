<template lang="pug">
  button.app-button(@click="onClick")
    slot Button
</template>

<script>
  export default {
    name: "AppButton",

    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>