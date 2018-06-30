<template lang="pug">
  app-button(:onClick="likeCard",
             :propButtonType="buttonAppearence",
             :size="buttonSize",
             :class="likeIconActive")
</template>

<script>
  import AppButton from '../AppButton.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'CardButtonLike',

    components: {
      AppButton
    },

    props: {
      cardID: {
        type: String,
        required: true
      },

      isCardLike: {
        type: Boolean,
        required: true
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
      ...mapActions('cards', ['likeToggle']),

      likeCard() {
        this.likeToggle(this.cardID);
      }
    }
  }
</script>