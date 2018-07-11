<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    .form-wrapper__field(v-for="input in fieldData")
      input(:name="input.name",
            :type="input.type",
            :placeholder="input.placeholder",
            :autocomplete="input.autocomplete",
            v-model="input.value")
      transition(enter-active-class="animated bounceIn",
                 leave-active-class="animated fadeOutRight")
        .form-wrapper__error(v-if="errors[`${input.name}`].error")
          span {{ errors[`${input.name}`].errorMessage | makeUppercase }}

    //.form-wrapper__field
      input(name="email",
            type="email",
            placeholder="Email",
            autocomplete="foo",
            v-model="email")
      transition(enter-active-class="animated bounceIn",
                 leave-active-class="animated fadeOutRight")
        .form-wrapper__error(v-if="errors.email.error")
          span {{ errors.email.errorMessage | makeUppercase }}

    //.form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      transition(enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOut")
        .form-wrapper__error(v-if="errors.password.error")
          span {{ errors.password.errorMessage | makeUppercase }}

    //.form-wrapper__field.-margin-bottom-xl
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
        fieldData: [],
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
      findFormField(place, findEl) {
        return place.findIndex((el) => el.name === findEl); // сделать так чтобы возращалось поле найденное по индексу
        // так как нам не нужно менять данные, а только проверить, то можно вернуть только данные
      },

      checkName() {
        return typeof this.name === string;
      },

      checkEmail() {
        const { regExp } = this.rules.email;
        const emailIndex = this.findFormField(this.fieldData, 'email');
        return regExp.test(this.fieldData[emailIndex].value);
      },

      checkPassword() {
        const passwordIndex = this.findFormField(this.fieldData, 'password');
        const currentPassLength = this.fieldData[passwordIndex].value.length;
        return currentPassLength >= this.rules.password.necessaryLength;
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
        console.log(this.checkPassword());
        if (this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
          const checkResults = {
            //name: this.checkName(),
            email: this.checkEmail(),
            password: this.checkPassword(),
            confirmPassword: this.checkPasswordEquality()
          };
          this.toggleErrors(checkResults);

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
    },

    created() {
      this.fieldData = this.$appConstants.forms.signInForm.inputs;
    }
  };
</script>
