<template lang="pug">
  section.edit-card.page
    .container
      h1 Edit Selected Card Data
      .edit-card__row
        card-edit(:data="cardData")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import CardEdit from './../containers/CardEdit.vue';

  export default {
    name: 'edit-card',
    props: {
      id: {
        type: String
      },
      name: {
        type: String
      }
    },
    components: {
      CardEdit
    },
    data() {
      return {
        showPage: false,
        cardData: {
          id: '',
          title: '',
          description: '',
          like: false
        }
      };
    },
    computed: {
      ...mapGetters('cards', ['cards', 'getCardByID'])
    },
    methods: {
      ...mapActions('cards', ['searchCardsById']),

      redirectTo() {
        this.$router.push({path: '/'});
      },
      routeDataHandler() {
        const card = this.getCardByID(`#${this.id}`);

        if (card !== undefined) {
          let { id, title, description, like } = card;

          this.cardData.id = id;
          this.cardData.title = title;
          this.cardData.description = description;
          this.cardData.like = like;
          return;
        }

        this.redirectTo();
      }
    },
    created() {
      this.routeDataHandler();
    }
  }
</script>