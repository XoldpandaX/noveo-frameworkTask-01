<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    .form-wrapper__field
      input(name="email",
            type="email",
            placeholder="Email",
            autocomplete="foo",
            v-model="email")
      .form-wrapper__error(v-if="isMailValid")
        span sss

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      .form-wrapper__error
        span sss

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      .form-wrapper__error
        span sss

    button.form-wrapper__button.-margin-block-center(@click.prevent="fieldsDataHandler()") Sign In
</template>

<script>
  export default {
    name: 'sign-in-form',

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },

    computed: {
      isMailValid() {

      },

      isPasswordValid() {

      },

      isPasswordsAreEqual() {

      }
    },

    methods: {
      fieldsDataHandler() {
        console.log('denis');
      }
    }
  }
</script>