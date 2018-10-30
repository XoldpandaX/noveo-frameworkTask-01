<template lang="pug">
  section.sign-in.page
    h1.page__title Please Sign Up
    form-sign-up(class="-margin-block-center")
</template>

<script>
import FormSignUp from '../components/Forms/FormSignUp';

export default {
  name: 'PageSignUp',
  components: {
    FormSignUp
  }
};
</script>
