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
    .app-button__row
      app-button(propButtonType="formButton", :onClick="confirmForm") Sign Up
</template>

<script>
  import {
    checkObjectFieldsForTrueValue,
    objFieldByValue,
    isNumeric,
    capitaliseFirstLetter,
    isObjFieldsAreEmpty
  } from '../../../helpers';
  import AppButton from '../../../components/AppButton.vue';

  export default {
    name: 'FormSignUp',

    components: {
      AppButton
    },

    data() {
      return {
        fieldData: [],
        rules: {},
        errors: {}
      };
    },

    methods: {
      checkName() {
        const { regExp } = this.rules.name;
        const name = objFieldByValue(this.fieldData, 'name', 'name');
        return !isNumeric(name) && name.length >= this.rules.name.necessaryLength && !regExp.test(name);
      },

      checkEmail() {
        const { regExp } = this.rules.email;
        const email = objFieldByValue(this.fieldData, 'name', 'email');
        return regExp.test(email);
      },

      checkPassword() {
        const password = objFieldByValue(this.fieldData, 'name', 'password');
        return password.length >= this.rules.password.necessaryLength;
      },

      checkPasswordEquality() {
        const currentPassword = objFieldByValue(this.fieldData, 'name', 'password');
        const confirmPassword = objFieldByValue(this.fieldData, 'name', 'confirmPassword');
        return currentPassword !== '' && this.checkPassword() && currentPassword === confirmPassword;
      },

      checkResults(arrOfFields) {
        let checkResults = {};

        arrOfFields.forEach(el => {
          let functionName = `check${capitaliseFirstLetter(el.name)}`;
          el.name !== 'confirmPassword' ?
            checkResults[el.name] = this[functionName]() :
            checkResults[el.name] = this.checkPasswordEquality();
        });
        return checkResults;
      },

      toggleErrors(results) {
        for (let key in results) {
          this.errors[key].error = !results[key];
        }
      },

      confirmForm() {
        if (!isObjFieldsAreEmpty(this.fieldData, 'value')) {
          const checkResults = this.checkResults(this.fieldData);
          this.toggleErrors(checkResults);

          (checkObjectFieldsForTrueValue(checkResults)) && this.prepareAndSendConfirmData(checkResults);
        } else {
          alert('Fill in all fields'); // add modal to show error
        }
      },

      prepareAndSendConfirmData() {
        const sendData = {};
        this.fieldData.forEach(el => {
          if (el.name !== 'confirmPassword') {
            sendData[el.name] = el.value;
          }
        });
        console.log(sendData);
      }
    },

    created() {
      const { inputs, fieldRules, errors } = this.$appConstants.forms.signInForm;
      this.fieldData = inputs;
      this.rules = fieldRules;
      this.errors = errors;
    }
  };
</script>
