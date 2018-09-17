<template lang="pug">
  .button-card-like
    app-button(:onClick="likeCard",
               :propButtonType="buttonAppearence",
               :size="buttonSize",
               :class="likeIconActive")
    span(v-if="totalLikes >= 0") {{ totalLikes }}
</template>

<script>
  import { mapActions } from 'vuex';
  import AppButton from '../AppButton.vue';

  export default {
    name: 'CardButtonLike',

    components: {
      AppButton
    },

    props: {
      cardID: {
        type: [String, Number],
        required: true
      },

      isCardLike: {
        type: Boolean,
        required: true
      },

      totalLikes: {
        type: Number
      }
    },

    data() {
      return {
        buttonAppearence: 'likeButton',
        buttonSize: {
          width: '25px',
          height: '25px'
        }
      };
    },

    computed: {
      likeIconActive() {
        return this.isCardLike ? '-active' : '';
      }
    },

    methods: {
      ...mapActions('cards', ['toggleCardLike', 'fg']),

      likeCard() {
        this.toggleCardLike(this.cardID);
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
