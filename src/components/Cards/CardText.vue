<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p {{ cardData.description }}
    footer
      .edit-btn(@click="redirectToEditCardPage")
      .like-btn(@click="likeCard" :class="changeLikeIconStyle")
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

    computed: {
      changeLikeIconStyle() {
        return this.cardData.like ? 'like-btn--active' : '';
      }
    },

    methods: {
      ...mapActions('cards', ['likeToggle']),

      likeCard() {
        const cardId = this.cardData.id;
        this.likeToggle(cardId);
      },

      redirectToEditCardPage() {
        const id = this.cardData.id.split('').splice(1).join('');
        this.$router.push({path: `/edit-card/${id}`})
      }
    }
  }
</script>