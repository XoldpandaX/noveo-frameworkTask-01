import regularExpressions from "./regularExpressions";

export default {
  signInForm: {
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        autocomplete: 'foo',
        value: ''
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        autocomplete: 'foo',
        value: ''
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        autocomplete: 'foo',
        value: ''
      },
      {
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
        autocomplete: 'foo',
        value: ''
      }
    ],
    fieldRules: {
      email: {
        regExp: regularExpressions.mailRegExp
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
  }
}