<template lang="pug">
  form.add-change-card-form
    .add-change-card-form__row
      input(type="text",
            placeholder="Enter title",
            maxlength="42",
            v-model="userInput.title")
    .add-change-card-form__row
      textarea(placeholder="Enter description",
               :maxlength="maxSymbols",
               v-model="userInput.description")
      span.add-change-card-form__counter {{ symbolsLeft }}/{{ maxSymbols }}
    .app-button__row
      button-card-delete(v-if="transform === 'edit-form'",
                           :cardID="cardData.id") Delete
      button-card-save(:formDataToStore="formDataToStore") Save
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import { getRandomID } from '../../helpers/index.js';
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
      },
    },

    data() {
      return {
        maxSymbols: 196,
        userInput: {
          title: '',
          description: ''
        }
      };
    },

    computed: {
      ...mapGetters('cards', ['cards']),

      symbolsLeft() {
        return this.userInput.description.length;
      }
    },

    methods: {
      ...mapActions('cards', ['addCardDataToStore']),

      formDataToStore() {
        const { title, description } = this.userInput;

        if (title !== '' && description !== '') {
          const storeData = {
            id: this.cardData ? this.cardData.id : getRandomID(),
            order: this.cardData ? this.cardData.order : this.cards.length,
            title: title,
            description: description,
            like: this.cardData ? this.cardData.like : false
          };

          this.addCardDataToStore(storeData);
          this.$router.push({name: 'home'});
        } else {
          alert('Enter some text');
        }
      },

      displayEditData() {
        const { title, description } = this.cardData;
        this.userInput.title = title;
        this.userInput.description = description;
      }
    },

    created() {
      if (this.cardData) this.displayEditData();
    }
  };
</script>
