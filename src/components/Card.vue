<template lang="pug">
  .card
    template(v-if="cardView === 'text-card'")
      .card__content
        h2 {{cardData.title}}
        p {{cardData.description}}
      footer(v-if="cardView === 'text-card'")
        .edit-btn
        .like-btn(@click="sendCardID" :class="{'like-btn--active' : cardData.like}")

    template(v-if="cardView === 'form-card'")
      .card__content.card__content--form
        input(type="text",
              placeholder="Enter title",
              maxlength="42",
              v-model="userInput.title")
        div
          textarea(placeholder="Enter description",
                   :maxlength="maxSymbols",
                   v-model="userInput.description")
          span {{symbolsLeft}}/{{maxSymbols}}
        button(@click.prevent="formDataToStore") save
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'card',
    props: {
      transformComponent: {
        type: String,
        default: 'text-card'
      },
      cardData: {
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
          case 'text-card':
            return 'text-card';
          case 'form-card':
            return 'form-card';
        }
      },
      symbolsLeft() {
        return this.userInput.description.length;
      }
    },
    methods: {
      ...mapActions('cards', ['addCardDataToStore', 'likeToggle']),

      formDataToStore() {
        const {title, description} = this.userInput;

        if (title !== '' && description !== '') {
          const data = {
            id: `#${this.cards.length + 1}`,
            title: title,
            description: description,
            like: false
          };
          this.addCardDataToStore(data);
          this.redirect();
        } else {
          alert('Enter some text');
        }
      },
      sendCardID() {
        const cardId = this.cardData.id;
        this.likeToggle(cardId);
      },
      redirect() {
        this.$router.push({name: 'home'});
      }
    }
  };
</script>