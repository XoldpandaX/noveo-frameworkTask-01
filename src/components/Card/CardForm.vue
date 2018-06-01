<template lang="pug">
  .card
    .card__content.card__content--form
      input(type="text",
            placeholder="Enter title",
            maxlength="42",
            v-model="userInput.title")
      div
        textarea(placeholder="Enter description",
                 :maxlength="maxSymbols",
                 v-model="userInput.description")
        span {{ symbolsLeft }}/{{ maxSymbols }}
      .card__button-row
        button(v-if="cardView === 'edit-form-card'" ,
               @click.prevent="deleteCard") delete
        button(@click.prevent="formDataToStore") save
</template>
<script>
  import {mapGetters, mapActions} from 'vuex';
  import {getRandomID} from './../../helpers/helpFunctions.js';

  export default {
    name: 'card',

    props: {
      transformComponent: {
        type: String,
        default: 'text-card'
      },

      cardData: {
        type: Object
      },

      editData: {
        type: Object
      }
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

      cardView() {
        switch (this.transformComponent) {
          case 'edit-form-card':
            return 'edit-form-card';
          case 'form-card':
            return 'form-card';
        }
      },

      symbolsLeft() {
        return this.userInput.description.length;
      }
    },
    methods: {
      ...mapActions('cards', ['addCardDataToStore', 'deleteCardDataFromStore']),

      formDataToStore() {
        const {title, description} = this.userInput;

        if (title !== '' && description !== '') {
          const storeData = {
            id: this.editData ? this.editData.id : `#${getRandomID()}`,
            title: title,
            description: description,
            like: this.editData ? this.editData.like : false
          };

          const sendData = {
            storeData,
            edited: !!this.editData
          };

          this.addCardDataToStore(sendData);
          this.redirectToHome();
        } else {
          alert('Enter some text');
        }
      },

      displayEditData() {
        if (this.editData) {
          const {title, description} = this.editData;
          this.userInput.title = title;
          this.userInput.description = description;
        }
      },

      deleteCard() {
        this.deleteCardDataFromStore(this.editData.id);
        this.redirectToHome();
      },

      redirectToHome() {
        this.$router.push({name: 'home'});
      },

      redirectToEditCard() {
        const id = this.cardData.id.split('').splice(1).join('');
        this.$router.push({path: `/edit-card/${id}`})
      }
    },

    created() {
      this.displayEditData();
      console.log(this.cardData);
    }
  };
</script>