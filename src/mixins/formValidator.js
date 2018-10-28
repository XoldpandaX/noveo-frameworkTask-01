import every from 'lodash/every.js';
import some from 'lodash/some.js';
import find from 'lodash/find.js';
import capitalize from 'lodash/capitalize.js';
import isFinite from 'lodash/isFinite.js';

export default {
  methods: {
    $_formCheck_confirmForm (afterVerificationMethod) {
      if (!some(this.fieldData, ['value', ''])) {
        const results = this.checkResults(this.fieldData);
        this.toggleErrors(results);
        (every(results)) && afterVerificationMethod();
      } else {
        alert('Fill in all fields');
      }
    },
    toggleErrors (results) {
      for (let key in results) {
        this.errors[key].error = !results[key];
      }
    },
    findFormValueByName (name) {
      return find(this.fieldData, el => el.name === name).value;
    },
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
    // this method should be used in beforeDestroy or destroyed hooks at component
    cleanFormData (formData) {
      for (let key in formData) {
        switch (key) {
          case 'inputs':
            const { inputs } = formData;
            // очищаем данные поля input
            inputs.forEach(el => el.value = '');
            break;
          case 'errors':
            const { errors } = formData;
            // очищаем данные поля error
            for (let key in errors) {
              errors[key].error = false;
            }
        }
      }
    }
  }
};
