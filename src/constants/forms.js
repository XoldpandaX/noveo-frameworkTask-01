import regularExpressions from "./regularExpressions";

export default {
  signUp: {
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
      name: {
        necessaryLength: 2,
        regExp: regularExpressions.onlyLetters
      },
      email: {
        regExp: regularExpressions.mailRegExp
      },
      password: {
        necessaryLength: 6
      }
    },
    errors: {
      name: {
        errorMessage: 'name can\'t be a digit and must contain at least two characters',
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
  },
  signIn: {
    inputs: [
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        autocomplete: 'foo',
        value: 'first@noveogroup.com'
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        autocomplete: 'foo',
        value: 'password'
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
      email: {
        errorMessage: 'invalid mail format',
        error: false
      },
      password: {
        errorMessage: 'password must be at least 6 characters',
        error: false
      }
    }
  }
};
