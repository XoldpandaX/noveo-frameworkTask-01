<template lang="pug">
  section.edit-card.page(v-if="showPage")
    h1.page__title Edit Selected Card Data
    .edit-card__row
      form-card(
      :card="cardData"
      transform="edit-form"
      )
</template>

<script>
import { mapGetters } from 'vuex';
import FormCard from '../components/Forms/FormCard';

export default {
  name: 'PageEditCard',
  components: {
    FormCard
  },
  props: {
    id: {
      type: [String, Number]
    }
  },
  data () {
    return {
      showPage: false,
      cardData: {}
    };
  },
  computed: {
    ...mapGetters('cards', ['cardByID'])
  },
  created () {
    this.routeDataHandler();
  },
  methods: {
    routeDataHandler () {
      const card = this.cardByID(this.id);
      if (card) {
        this.cardData = {
          ...card
        };

        this.showPage = true;
        return;
      }

      this.$router.push({ path: '/' });
    }
  }
};
</script>
