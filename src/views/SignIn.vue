<template lang="pug">
  section.sign-in.page
    h1.page__title Please Sign In
    .sign-in__form-container
      form-sign-in
</template>

<script>
import FormSignIn from '../components/Forms/FormSignIn';

export default {
  name: 'PageSignIn',
  components: {
    FormSignIn
  }
};
</script>
