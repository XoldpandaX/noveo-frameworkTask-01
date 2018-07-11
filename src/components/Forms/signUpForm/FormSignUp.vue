<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    .form-wrapper__field
      // выводить форму циклом, и добавить данные инпотов в константу
      input(name="name",
            type="text",
            placeholder="Name",
            autocomplete="foo",
            v-model="name")
      transition(enter-active-class="animated bounceIn",
                 leave-active-class="animated fadeOutRight")
        .form-wrapper__error(v-if="errors.email.error")
          span {{ errors.name.errorMessage | makeUppercase }}

    .form-wrapper__field
      input(name="email",
            type="email",
            placeholder="Email",
            autocomplete="foo",
            v-model="email")
      transition(enter-active-class="animated bounceIn",
                 leave-active-class="animated fadeOutRight")
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
    name: 'FormSignUp',

    components: {
      AppButton
    },

    data() {
      return {
        name: '',
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
          name: {
            errorMessage: 'name must be a string',
            error: false
          },
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
      checkName() {
        console.log(typeof this.name); // сделать проверку что это введена строка а не цифры
        return typeof this.name === string;
      },

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
        if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
          const checkResults = {
            name: this.checkName(),
            email: this.checkEmail(),
            password: this.checkPassword(),
            confirmPassword: this.checkPasswordEquality()
          };
          this.toggleErrors(checkResults);
          console.log(this.checkName());

          if (checkObjectFieldsForTrueValue(checkResults)) this.prepareAndSendConfirmData(checkResults);

        } else {
          alert('Fill in all fields'); // add modal to show error
        }
      },

      prepareAndSendConfirmData() {
        const sendData = {
          email: this.email,
          password: this.password
        };

        console.log(sendData);
      }
    }
  };
</script>
