<template lang="pug">
  .card
    .card__content
      h2 {{cardData.title}}
      p {{cardData.description}}
    footer
      .edit-btn(@click="redirectToEditCard")
      .like-btn(@click="likeCard" :class="{'like-btn--active' : cardData.like}")
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'card-text',

    props: {
      cardData: {
        type: Object,
        required: true
      }
    },

    methods: {
      ...mapActions('cards', ['likeToggle']),

      likeCard() {
        const cardId = this.cardData.id;
        this.likeToggle(cardId);
      },

      redirectToEditCard() {
        const id = this.cardData.id.split('').splice(1).join('');
        this.$router.push({path: `/edit-card/${id}`})
      }
    }
  }
</script>