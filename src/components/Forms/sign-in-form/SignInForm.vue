<template lang="pug">
  form.form-wrapper.-sign-in
    h3 write-in fields
    input(name="email",
          type="email",
          placeholder="Email",
          autocomplete="foo",
          v-model="fieldsData.email")
    input(name="password",
          type="password",
          placeholder="Password",
          autocomplete="foo",
          v-model="fieldsData.password")
    input(class="-margin-bottom-xl",
          name="confirm-password",
          type="password",
          placeholder="Confirm Password",
          autocomplete="foo",
          v-model="fieldsData.confirmPassword")
    button(class="form-wrapper__button -center",
           @click.prevent="fieldsDataHandler()") Sign In
</template>

<script>
  export default {
    name: 'sign-in-form',

    data() {
      return {
        fieldsData: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      };
    },

    methods: {
      fieldsDataHandler() {
        console.log(this.fieldsData);
      }
    }
  }
</script>