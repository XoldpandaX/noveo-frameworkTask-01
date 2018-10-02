<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      form-add-change-card(@getFormData="setFormData",
                           @confirmButtonsClicked="isConfirmButtonClicked = true")
</template>

<script>
import { mapActions } from 'vuex';
import { valuesIn } from 'lodash';
import FormAddChangeCard from '../components/Forms/FormAddChangeCard.vue';

export default {
  name: 'PageNewCard',

  components: {
    FormAddChangeCard
  },

  data () {
    return {
      // data received from form-add-change-card component
      formCardData: {},
      // save/delete button from form-add-change-card component
      isConfirmButtonClicked: false
    };
  },

  beforeRouteLeave (to, from, next) {
    const arrOfObjectValues = valuesIn(this.formCardData);
    if (arrOfObjectValues.length > 0 && this.isConfirmButtonClicked) {
      next();
    } else {
      this.showModal({ id: 'confirm-modal',
        config: {
          action: next,
          formData: this.formCardData
        }
      });
    }
  },

  methods: {
    ...mapActions('ui', ['showModal']),
    setFormData (childrenFormData) {
      this.formCardData = childrenFormData;
    }
  }
};
</script>
