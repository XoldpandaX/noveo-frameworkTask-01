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
          span {{ errors.email.errorMessage | makeUppercase }}

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="errors.password.error")
          span {{ errors.password.errorMessage | makeUppercase }}

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="errors.confirmPassword.error")
          span {{ errors.confirmPassword.errorMessage | makeUppercase }}
    .app-button__row
      app-button(propButtonType="formButton", :onClick="confirmForm") Sign Up
</template>

<script>
  import { checkObjectFieldsForTrueValue } from '../../../helpers';
  import AppButton from '../../../components/AppButton.vue';
  import CONSTANTS from '../../../constants';

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
        rules: {
          email: {
            regExp: CONSTANTS.regularExpressions.mailRegExp
          },
          password: {
            necessaryLength: 6
          }
        },
        errors: {
          email: {
            errorMessage: 'invalid mail format',
            error: false
          },
          password: {
            errorMessage: 'password must be at least 6 characters',
            error: false
          },
          confirmPassword: {
            errorMessage: 'passwords do not match',
            error: false
          }
        }
      };
    },

    methods: {
      checkEmail() {
        const { regExp } = this.rules.email;
        return regExp.test(this.email);
      },

      checkPassword() {
        const currentPassLength = this.password.length;
        const necessaryPassLength = this.rules.password.necessaryLength;
        return currentPassLength >= necessaryPassLength;
      },

      checkPasswordEquality() {
        return this.password !== '' && this.checkPassword() && this.password === this.confirmPassword;
      },

      toggleErrors(results) {
        for (let key in results) {
          this.errors[key].error = !results[key];
        }
      },

      confirmForm() {
        if (this.email !== '' && this.password !== '') {
          const checkResults = {
            email: this.checkEmail(),
            password: this.checkPassword(),
            confirmPassword: this.checkPasswordEquality()
          };
          this.toggleErrors(checkResults)

          if (checkObjectFieldsForTrueValue(checkResults)) this.sendConfirmedData(checkResults)

        } else {
          alert('Nothing data to validate'); // add modal to show error
        }
      },

      sendConfirmedData() {
        console.log('denis');
      }
    }
  };
</script>
