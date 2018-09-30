<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      form-add-change-card(@saveButtonClicked="preventDataLoss")
</template>

<script>
import { mapActions } from 'vuex';
import FormAddChangeCard from '../components/Forms/FormAddChangeCard.vue';

export default {
  name: 'PageNewCard',

  components: {
    FormAddChangeCard
  },

  data () {
    return {
      isFromDataSave: false
    };
  },

  beforeRouteLeave (to, from, next) {
    if (this.isFromDataSave) {
      next();
    } else {
      next(false);
      this.showModal({ id: 'confirm-modal' });
    }
  },

  methods: {
    ...mapActions('ui', ['showModal']),
    preventDataLoss () {
      this.isFromDataSave = true;
    }
  }
};
</script>
