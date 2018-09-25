<template lang="pug">
  .card
    .card__content
      h2 {{ cardData.title }}
      p created at: {{ cardData.created_at.date|timeAgoUTC }}
      p {{ cardData.content }}
    footer
      button-card-edit(:cardID="cardData.id")
      button-card-like(:cardID="cardData.id",
                       :isCardLike="cardData.liked",
                       :totalLikes="cardData.total_likes")
</template>

<script>
  import ButtonCardEdit from '../Buttons/ButtonCardEdit.vue';
  import ButtonCardLike from '../Buttons/ButtonCardLike.vue';

  export default {
    name: 'CardInfo',

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
  };
</script>
