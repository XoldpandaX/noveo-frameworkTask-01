<template lang="pug">
  div
    app-button(:onClick="likeCard",
               :propButtonType="buttonAppearence",
               :size="buttonSize",
               :class="likeIconActive")
    span(v-if="displayLikesTotal") {{ likesTotal }}
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

      likesTotal: {
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
      },

      displayLikesTotal() {
        return !!this.likesTotal;
      }
    },

    methods: {
      ...mapActions('cards', ['likeToggleCard']),

      likeCard() {
        this.likeToggleCard(this.cardID);
      }
    }
  };
</script>
