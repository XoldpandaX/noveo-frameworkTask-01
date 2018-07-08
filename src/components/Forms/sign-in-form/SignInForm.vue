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
        .form-wrapper__error(v-if="errors.email.error")
          span {{ errors.email.errorMessage }}

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="errors.password.error")
          span {{ errors.password.errorMessage }}

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="errors.confirmPassword.error")
          span {{ errors.confirmPassword.errorMessage }}
    .app-button__row
      app-button(propButtonType="formButton", :onClick="checkEmail") Sign Up
</template>

<script>
  import AppButton from '../../../components/AppButton.vue';

  export default {
    name: 'SignInForm',

    components: {
      AppButton
    },

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
          email: {
            errorMessage: '',
            error: false
          },
          password: {
            errorMessage: '',
            error: false
          },
          confirmPassword: {
            errorMessage: '',
            error: false
          }
        }
      };
    },

    computed: {
      isEmailValid() {
        return true;
      },

      isPasswordValid() {
        return true;
      },

      isPasswordsAreEqual() {
        return true;
      }
    },

    methods: {
      checkEmail(mail) {
        console.log('name');
      }
    }
  };
</script>
