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
          span {{ errorsMessages.email }}

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="isPasswordValid")
          span {{ errorsMessages.password }}

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="isPasswordsAreEqual")
          span {{ errorsMessages.confirmPassword }}

    button.form-wrapper__button.-margin-block-center(@click.prevent="fieldsDataHandler()") Sign In
</template>

<script>
  import mixin from '../../../vue-mixins';

  export default {
    name: 'SignInForm',

    mixins: [mixin.checkFormFields],

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },

    methods: {
      fieldsDataHandler() {
        console.log('denis');
      }
    },

    created() {
      this.setErrorsMessages({
        email: 'incorrect mail format',
        password: 'password length must be at least 6 characters',
        confirmPassword: 'password are not equal'
      });
    }
  };
</script>
