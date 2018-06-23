<template lang="pug">
  button.app-button(@click="onClick")
    slot
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