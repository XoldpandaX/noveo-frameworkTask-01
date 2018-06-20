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
    button.form-wrapper__button.-center(:class="{ 'disabled-button': isButtonDisabled }",
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

    computed: {
      isButtonDisabled() {
        let error = 0;

        // for (let field of this.fieldsData) {
        //   if (field === '') {
        //     error++;
        //   }
        // }

        return true;
      }
    },

    methods: {
      fieldsDataHandler() {
        console.log('denis');
      }
    }
  }
</script>