<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    .form-wrapper__field
      input(name="email",
            type="email",
            placeholder="Email",
            autocomplete="foo",
            v-model="email")
      transition(enter-active-class="animated bounceIn",
                 leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="isEmailValid")
          span {{ errorMsg.emailIsIncorrect }}

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="isPasswordValid")
          span {{ errorMsg.passwordIsIncorrect }}

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="isPasswordsAreEqual")
          span {{ errorMsg.confirmPasswordIsIncorrect }}
    button.form-wrapper__button.-margin-block-center(@click.prevent="fieldsDataHandler()") Sign In
</template>

<script>

  export default {
    name: 'SignInForm',

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errorMsg: {
          emailIsIncorrect: '',
          passwordIsIncorrect: '',
          confirmPasswordIsIncorrect: ''
        }
      };
    },

    methods: {

    }
  };
</script>
