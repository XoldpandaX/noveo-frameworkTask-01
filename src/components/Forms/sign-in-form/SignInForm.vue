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
        .form-wrapper__error(v-if="isEmailValid")
          span {{ errorsMessages.email }}

    .form-wrapper__field
      input(name="password",
            type="password",
            placeholder="Password",
            autocomplete="foo",
            v-model="password")
      .form-wrapper__error
        span sss

    .form-wrapper__field.-margin-bottom-xl
      input(name="confirm-password",
            type="password",
            placeholder="Confirm Password",
            autocomplete="foo",
            v-model="confirmPassword")
      .form-wrapper__error
        span sss

    button.form-wrapper__button.-margin-block-center(@click.prevent="fieldsDataHandler()") Sign In
</template>

<script>
  export default {
    name: 'sign-in-form',

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errorsMessages: {
          email: 'incorrect mail format',
          password: '',
          confirmPassword: ''
        },
        errors: 0
      };
    },

    computed: {
      isEmailValid() {
        if (this.email !== '') {
          let mail = this.email;

          return mail.length === 0 || mail.length < 10;
        }
      },

      isPasswordValid() {

      },

      isPasswordsAreEqual() {

      }
    },

    methods: {
      fieldsDataHandler() {
        console.log('denis');
      }
    }
  }
</script>
