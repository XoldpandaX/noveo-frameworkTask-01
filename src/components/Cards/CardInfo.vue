<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p created: {{ cardData.created_at.date|timeAgoUTC }}
      p {{ cardData.content }}
    footer
      app-button(
      :on-click="() => $router.push({ path: `/edit-card/${this.cardData.id}` })"
      prop-button-type="editButton"
      :size="{ width: '25px', height: '25px' }"
      )
      .button-card-like
        app-button(
        :class="likeIconActive"
        :on-click="likeCard"
        prop-button-type="likeButton"
        :size="{ width: '25px', height: '25px' }"
        )
        span(v-if="totalLikes >= 0") {{ totalLikes }}
</template>

<script>
import { mapActions } from 'vuex';
import AppButton from '../AppButton.vue';

export default {
  name: 'CardInfo',

  components: {
    AppButton
  },

  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  computed: {
    likeIconActive () {
      return this.cardData.liked ? '-active' : '';
    },
    totalLikes () {
      return this.cardData.total_likes;
    }
  },
  methods: {
    ...mapActions('cards', ['toggleCardLike']),
    likeCard () {
      this.toggleCardLike(this.cardData.id);
    }
  }
};
</script>

<style lang="scss" scoped>
  .button-card-like {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      margin-top: 5px;
    }
  }
</style>
