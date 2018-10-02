<template lang="pug">
  form.add-change-card-form
    .add-change-card-form__row
      input(type="text",
            placeholder="Enter title",
            maxlength="42",
            v-on:input="pushFormDataUp",
            v-model="userInput.title")
    .add-change-card-form__row
      textarea(placeholder="Enter description",
               :maxlength="maxSymbols",
               v-on:input="pushFormDataUp",
               v-model="userInput.description")
      span.add-change-card-form__counter {{ symbolsLeft }}/{{ maxSymbols }}
    .app-button__row
      button-card-delete(v-if="transform === 'edit-form'",
                         :cardID="cardData.id",
                         v-on:click.native="isConfirmButtonClicked") Delete
      button-card-save(:formDataToStore="formDataToStore",
                       v-on:click.native="isConfirmButtonClicked") Save
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ButtonCardSave from '../Buttons/ButtonCardSave.vue';
import ButtonCardDelete from '../Buttons/ButtonCardDelete.vue';

export default {
  name: 'FormAddChangeCard',

  components: {
    ButtonCardSave,
    ButtonCardDelete
  },

  props: {
    cardData: {
      type: Object
    },

    transform: {
      type: String
    }
  },

  data () {
    return {
      maxSymbols: 196,
      userInput: {
        title: '',
        description: ''
      }
    };
  },

  computed: {
    ...mapGetters('cards', ['cardByID']),

    symbolsLeft () {
      return this.userInput.description.length;
    }
  },

  methods: {
    ...mapActions('cards', ['createCard', 'editCard']),

    // event emmiter
    pushFormDataUp () {
      this.$emit('getFormData', this.userInput);
    },
    // event emmiter
    isConfirmButtonClicked () {
      this.$emit('confirmButtonsClicked');
    },

    formDataToStore () {
      const { title, description } = this.userInput;

      if (title !== '' && description !== '') {
        const storeData = {
          title: title,
          content: description
        };

        if (!this.cardData) {
          // create new card
          this.createCard(storeData).then(() => {
            this.$router.push({ name: 'home' });
          });
        } else {
          // edit exist card
          storeData.id = this.cardData.id;
          this.editCard(storeData).then(() => {
            this.$router.push({ name: 'home' });
          });
        }
      } else {
        alert('Enter some text');
      }
    },

    displayEditData () {
      const { title, content } = this.cardData;
      this.userInput.title = title;
      this.userInput.description = content;
    }
  },

  created () {
    if (this.cardData) this.displayEditData();
  }
};
</script>
