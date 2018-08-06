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
    .app-button__row.-margin-top-l
      app-button(propButtonType="formButton", :onClick.enter="confirmForm") Sign Up
</template>

<script>
  import { isFinite, some, capitalize, find } from 'lodash';
  import { mapActions } from 'vuex';
  import AppButton from '../AppButton.vue';

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
      ...mapActions('auth', ['registerUser']),

      checkName() {
        const { regExp } = this.rules.name;
        const name = find(this.fieldData, el => el.name === 'name');
        return(
          !isFinite(name.value)
          && name.value.length >= this.rules.name.necessaryLength
          && !regExp.test(name.value)
        );
      },

      checkEmail() {
        const { regExp } = this.rules.email;
        const email = find(this.fieldData, el => el.name === 'email');
        return regExp.test(email.value);
      },

      checkPassword() {
        const password = find(this.fieldData, el => el.name === 'password');
        return password.value.length >= this.rules.password.necessaryLength;
      },

      checkPasswordEquality() {
        const currentPassword = find(this.fieldData, el => el.name === 'password');
        const confirmPassword = find(this.fieldData, el => el.name === 'confirmPassword');
        return(
          currentPassword.value !== ''
          && this.checkPassword()
          && currentPassword.value === confirmPassword.value
        );
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

          (isFinite(checkResults)) && this.prepareAndSendConfirmData(checkResults);
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
        this.registerUser(JSON.stringify(sendData)); // vuex action
      },
    },

    created() {
      const { inputs, fieldRules, errors } = this.$appConstants.forms.signUp;
      this.fieldData = inputs;
      this.rules = fieldRules;
      this.errors = errors;
    }
  };
</script>
