<template lang="pug">
  .card
    .card__content
      h2 {{ card.title }}
      p created: {{ card.created_at.date|timeAgoUTC }}
      p {{ card.content }}
    footer
      app-button(
      @btnClicked="() => $router.push({ path: `/edit-card/${this.card.id}` })"
      type="editButton"
      :size="{ width: '25px', height: '25px' }"
      )
      .button-card-like
        app-button(
        :class="likeIconActive"
        @btnClicked="likeCard"
        type="likeButton"
        :size="{ width: '25px', height: '25px' }"
        )
        span(v-if="totalLikes >= 0") {{ totalLikes }}
</template>

<script>
import { mapActions } from 'vuex';
import AppButton from '../AppButton';

export default {
  name: 'CardInfo',
  components: {
    AppButton
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    likeIconActive () {
      return this.card.liked ? '-active' : '';
    },
    totalLikes () {
      return this.card.total_likes;
    }
  },
  methods: {
    ...mapActions('cards', ['toggleCardLike']),
    likeCard () {
      this.toggleCardLike(this.card.id);
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
