<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write in fields
    input(name="email",
          type="email",
          placeholder="Email",
          autocomplete="foo")
    input(name="password",
          type="password",
          placeholder="Password",
          autocomplete="foo")
    input(name="confirm-password",
          type="password",
          placeholder="Confirm Password",
          autocomplete="foo",
          class="-margin-bottom-xl")
    button(class="form-wrapper__button -center",
           @click.prevent="run()") Sign In
</template>

<script>
  export default {
    name: 'sign-in-form',

    data() {
      return {
        fildsData: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      };
    },

    methods: {
      chickInputData() {

      }
    }
  }
</script>