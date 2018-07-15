<template lang="pug">
  section.edit-card.page(v-if="showPage")
    h1.page__title Edit Selected Card Data
    .edit-card__row
      form-add-change-card(:cardData="cardData", transform="edit-form")
</template>

<script>
  import { mapGetters } from 'vuex';
  import FormAddChangeCard from '../components/Forms/FormAddChangeCard.vue'

  export default {
    name: 'PageEditCard',

    props: {
      id: {
        type: String
      }
    },

    components: {
      FormAddChangeCard
    },

    data() {
      return {
        showPage: false,
        cardData: {}
      };
    },

    computed: {
      ...mapGetters('cards', ['getCardByID'])
    },

    methods: {
      redirectTo() {
        this.$router.push({path: '/'});
      },

      routeDataHandler() {
        const card = this.getCardByID(`#${this.id}`);

        if (card) {
          this.cardData = {
            ...card
          };

          this.showPage = true;
          return;
        }

        this.redirectTo();
      }
    },

    created() {
      this.routeDataHandler();
    }
  };
</script>