<template lang="pug">
  section.sign-in.page
    h1.page__title Please Sign In
    .sign-in__form-container
      sign-in-form(class="-margin-block-center")
</template>

<script>
  import SignInForm from '../components/Forms/sign-in-form/SignInForm.vue'

  export default {
    name: 'sign-in',

    components: {
      SignInForm
    }
  }
</script>