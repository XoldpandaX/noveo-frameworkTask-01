<template lang="pug">
  section.sign-in.page
    .container
      h1 Please Sign In
      .sign-in__form-container
        sign-in-form
</template>

<script>
  import SignInForm from '../components/Forms/sign-in-form/SignInFrom.vue'

  export default {
    name: 'sign-in',

    components: {
      SignInForm
    }
  }
</script>