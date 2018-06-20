<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    input(name="email",
          type="email",
          placeholder="Email",
          autocomplete="foo",
          v-model="email")
    input(name="password",
          type="password",
          placeholder="Password",
          autocomplete="foo",
          v-model="password")
    input(class="-margin-bottom-xl",
          name="confirm-password",
          type="password",
          placeholder="Confirm Password",
          autocomplete="foo",
          v-model="confirmPassword")
    div {{ isButtonDisabled }}
    button.form-wrapper__button.-center(@click.prevent="fieldsDataHandler()") Sign In
</template>

<script>
  export default {
    name: 'sign-in-form',

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },

    computed: {
      isButtonDisabled() {

      }
    },

    methods: {
      fieldsDataHandler() {
        console.log('denis');
      }
    }
  }
</script>