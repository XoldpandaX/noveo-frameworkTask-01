<template lang="pug">
  section.edit-card.page
    .container(v-show="showPage")
      h1 Edit Selected Card Data
      .edit-card__row
        container-card-edit(:data="cardData")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ContainerCardEdit from '../containers/ContainerCardEdit.vue';

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
      ContainerCardEdit
    },

    data() {
      return {
        showPage: false,
        cardData: {
          id: '',
          order: '',
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

        if (card) {
          let { id, title, description, like, order } = card;

          this.cardData.id = id;
          this.cardData.order = order;
          this.cardData.title = title;
          this.cardData.description = description;
          this.cardData.like = like;
          this.showPage = true;
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