<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    .form-wrapper__field(v-for="(input, index) in fieldData")
      input(
      :key="`input${index}`"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
      :autocomplete="input.autocomplete"
      v-model="input.value"
      )
      transition(
      enter-active-class="animated bounceIn",
      leave-active-class="animated fadeOutRight"
      )
        .form-wrapper__error(v-if="errors[input.name].error")
          span {{ errors[input.name].errorMessage | makeUppercase }}
    .app-button__row.-margin-top-l
      app-button(
      type="formButton"
      @btnClicked.enter="confirmForm"
      ) Sign Up
</template>

<script>
import { mapActions } from 'vuex';
import isFinite from 'lodash/isFinite.js';
import every from 'lodash/every.js';
import some from 'lodash/some.js';
import capitalize from 'lodash/capitalize.js';
import find from 'lodash/find.js';
import AppButton from '../AppButton.vue';

export default {
  name: 'FormSignUp',

  components: {
    AppButton
  },

  data () {
    return {
      fieldData: [ ...this.$appConstants.forms.signUp.inputs ],
      rules: { ...this.$appConstants.forms.signUp.fieldRules },
      errors: { ...this.$appConstants.forms.signUp.errors }
    };
  },

  methods: {
    ...mapActions('auth', ['registerUser']),

    checkName () {
      const { regExp } = this.rules.name;
      const name = this.findFormValueByName('name');
      return (
        !isFinite(name) &&
          name.length >= this.rules.name.necessaryLength &&
          !regExp.test(name)
      );
    },

    checkEmail () {
      const { regExp } = this.rules.email;
      return regExp.test(this.findFormValueByName('email'));
    },

    checkPassword () {
      return this.findFormValueByName('password').length >= this.rules.password.necessaryLength;
    },

    checkPasswordEquality () {
      const currentPassword = this.findFormValueByName('password');
      const confirmPassword = this.findFormValueByName('confirmPassword');
      return (
        currentPassword !== '' &&
          this.checkPassword() &&
          currentPassword === confirmPassword
      );
    },

    findFormValueByName (name) {
      return find(this.fieldData, el => el.name === name).value;
    },

    checkResults (arrOfFields) {
      let checkResults = {};

      arrOfFields.forEach(el => {
        let functionName = `check${capitalize(el.name)}`;
        el.name !== 'confirmPassword'
          ? checkResults[el.name] = this[functionName]()
          : checkResults[el.name] = this.checkPasswordEquality();
      });
      return checkResults;
    },

    toggleErrors (results) {
      for (let key in results) {
        this.errors[key].error = !results[key];
      }
    },

    confirmForm () {
      if (!some(this.fieldData, ['value', ''])) {
        const results = this.checkResults(this.fieldData);
        this.toggleErrors(results);

        (every(results)) && this.prepareAndSendConfirmData(results);
      } else {
        alert('Fill in all fields'); // add modal to show error
      }
    },

    async prepareAndSendConfirmData () {
      const sendData = {};
      this.fieldData.forEach(el => {
        if (el.name !== 'confirmPassword') {
          sendData[el.name] = el.value;
        }
      });
      const response = await this.registerUser(sendData);
      if (response) {
        this.$appConstants.forms.signIn.inputs[0].value = response;
        this.$router.push('/sign-in');
      }
    }
  },

  beforeDestroy () {
    for (let key in this.$appConstants.forms.signUp) {
      switch (key) {
        case 'inputs':
          const { inputs } = this.$appConstants.forms.signUp;
          // очищаем данные поля input из константы
          inputs.forEach(el => el.value = '');
          break;
        case 'errors':
          const { errors } = this.$appConstants.forms.signUp;
          // очищаем данные поля error из константы
          for (let key in errors) {
            errors[key].error = false;
          }
      }
    }
  }
};
</script>
