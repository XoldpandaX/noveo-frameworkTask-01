<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p {{ cardData.description }}
    footer
      button-card-edit(:cardID="cardData.id")
      button-card-like(:cardID="cardData.id",
                       :isCardLike="cardData.like")
</template>

<script>
  import ButtonCardEdit from '../Buttons/ButtonCardEdit.vue';
  import ButtonCardLike from '../Buttons/ButtonCardLike.vue';

  export default {
    name: 'cardInfo',

    components: {
      ButtonCardEdit,
      ButtonCardLike
    },

    props: {
      cardData: {
        type: Object,
        required: true
      }
    }
  }
</script>