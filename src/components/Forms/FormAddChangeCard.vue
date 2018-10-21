<template lang="pug">
  form.add-change-card-form
    .add-change-card-form__row
      input(
      type="text"
      placeholder="Enter title"
      max-length="42"
      @input="pushFormDataUp"
      v-model="userInput.title"
      )
    .add-change-card-form__row
      textarea(
      placeholder="Enter description"
      :maxlength="maxSymbols"
      @input="pushFormDataUp"
      v-model="userInput.description"
      )
      span.add-change-card-form__counter {{ symbolsLeft }}/{{ maxSymbols }}
    .app-button__row
      app-button(
      v-if="transform === 'edit-form'"
      type="formButton"
      :on-click="deleteCard"
      @click.native="isConfirmButtonClicked"
      ) Delete
      app-button(
      :on-click="formDataToStore"
      @click.native="isConfirmButtonClicked"
      type="formButton"
      ) Save
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AppButton from '../AppButton.vue';

export default {
  name: 'FormAddChangeCard',

  components: {
    AppButton
  },

  props: {
    card: {
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
    ...mapActions('cards', ['createCard', 'editCard', 'removeCard']),

    // event emitter
    pushFormDataUp () {
      this.$emit('getFormData', this.userInput);
    },
    // event emitter
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

        if (!this.card) {
          // create new card
          this.createCard(storeData).then(() => {
            this.$router.push({ name: 'home' });
          });
        } else {
          // edit exist card
          storeData.id = this.card.id;
          this.editCard(storeData).then(() => {
            this.$router.push({ name: 'home' });
          });
        }
      } else {
        alert('Enter some text');
      }
    },

    displayEditData () {
      const { title, content } = this.card;
      this.userInput.title = title;
      this.userInput.description = content;
    },
    deleteCard () {
      this.removeCard(this.card.id).then(() => {
        this.$router.push({ name: 'home' });
      });
    }
  },

  created () {
    if (this.card) this.displayEditData();
  }
};
</script>
