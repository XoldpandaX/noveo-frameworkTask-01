<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p {{ cardData.description }}
    footer
      card-button-edit(:cardID="cardData.id")
      card-button-like(:cardID="cardData.id",
                       :isCardLike="cardData.like")
</template>

<script>
  import CardButtonEdit from '../../components/Cards/CardButtonEdit.vue';
  import CardButtonLike from '../../components/Cards/CardButtonLike.vue';

  export default {
    name: 'cardInfo',

    components: {
      CardButtonEdit,
      CardButtonLike
    },

    props: {
      cardData: {
        type: Object,
        required: true
      }
    }
  }
</script>