<template lang="pug">
  form.form-wrapper.-sign-up.-margin-block-center
    h3 write-in fields
    .form-wrapper__field(v-for="(input, index) in fieldData")
      input(
      :key="`input${index}`"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
      :autocomplete="input.autocomplete"
      v-model="input.value")
      transition(
      enter-active-class="animated bounceIn"
      leave-active-class="animated fadeOutRight")
        .form-wrapper__error(v-if="errors[input.name].error")
          span {{ errors[input.name].errorMessage }}
    .app-button__row.-margin-top-l
      app-button(
      type="formButton"
      @btnClicked="$_formCheck_confirmForm(prepareAndSendConfirmData)"
      ) Sign In
</template>

<script>
import { mapActions } from 'vuex';
import AppButton from '../AppButton.vue';
import formValidator from '../../mixins/formValidator.js';

export default {
  name: 'FormSignIn',
  components: {
    AppButton
  },
  mixins: [formValidator],
  data () {
    return {
      fieldData: [ ...this.$appConstants.forms.signIn.inputs ],
      rules: { ...this.$appConstants.forms.signIn.fieldRules },
      errors: { ...this.$appConstants.forms.signIn.errors }
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    async prepareAndSendConfirmData () {
      const sendData = {};
      this.fieldData.forEach(el => {
        if (el.name !== 'confirmPassword') {
          sendData[el.name] = el.value;
        }
      });
      const success = await this.loginUser(sendData);
      success && this.$router.push('/');
    }
  },
  beforeDestroy () {
    this.cleanFormData(this.$appConstants.forms.signIn);
  }
};
</script>
