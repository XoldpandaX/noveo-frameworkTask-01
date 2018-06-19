<template lang="pug">
  form.form-wrapper.-sign-in
    h3 sign-in
    input(name="email",
          type="email",
          placeholder="Email")
    input(name="password",
          type="password",
          placeholder="Password")
    input(name="confirm-password",
          type="password",
          placeholder="Confirm Password")

</template>

<script>
  export default {
    name: 'sign-in-form'
  }
</script>