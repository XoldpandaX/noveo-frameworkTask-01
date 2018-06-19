<template lang="pug">
  form.sign-in-form
    h3 sign-in
    input(name="email",
          type="email",
          placeholder="Email")
</template>

<script>
  export default {
    name: 'sign-in-form'
  }
</script>