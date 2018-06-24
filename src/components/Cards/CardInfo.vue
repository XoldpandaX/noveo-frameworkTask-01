<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p {{ cardData.description }}
    footer
      card-button-edit(:cardID="cardData.id")
      .like-btn(@click="likeCard" :class="changeLikeIconStyle")
</template>

<script>
  import CardButtonEdit from '../../components/Cards/CardButtonEdit.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'cardInfo',

    components: {
      CardButtonEdit
    },

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
      }
    }
  }
</script>