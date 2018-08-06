<template lang="pug">
  form.form-wrapper.-sign-up.-margin-block-center
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
    .app-button__row.-margin-top-l
      app-button(propButtonType="formButton", :onClick.enter="confirmForm") Sign In
</template>

<script>
  import { every, some, capitalize, find } from 'lodash';
  import AppButton from '../AppButton.vue';

  export default {
    name: 'FormSignIn',

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
      checkEmail() {
        const { regExp } = this.rules.email;
        const email = find(this.fieldData, el => el.name === 'email');
        return regExp.test(email.value);
      },

      checkPassword() {
        const password = find(this.fieldData, el => el.name === 'password');
        return password.value.length >= this.rules.password.necessaryLength;
      },

      checkResults(arrOfFields) {
        let checkResults = {};

        arrOfFields.forEach(el => {
          let functionName = `check${capitalize(el.name)}`;
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
        if (!some(this.fieldData, ['value', ''])) {
          const checkResults = this.checkResults(this.fieldData);
          this.toggleErrors(checkResults);

          (every(checkResults)) && this.prepareAndSendConfirmData(checkResults);
        } else {
          alert('Fill in all fields'); // TODO add modal for error
        }
      },

      prepareAndSendConfirmData() {
        const sendData = {};
        this.fieldData.forEach(el => {
          if (el.name !== 'confirmPassword') {
            sendData[el.name] = el.value;
          }
        });
        this.registerUser(JSON.stringify(sendData)); // vuex action
      }
    },

    created() {
      const { inputs, fieldRules, errors } = this.$appConstants.forms.signIn;
      this.fieldData = inputs;
      this.rules = fieldRules;
      this.errors = errors;
    }
  }
</script>
