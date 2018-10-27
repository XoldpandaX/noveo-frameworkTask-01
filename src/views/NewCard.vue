<template lang="pug">
  section.add-new-card.page
    h1.page__title Add New Card
    .add-new-card__row
      form-card(
      @getFormData="setFormData"
      @confirmButtonsClicked="isConfirmButtonClicked = true"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import valuesIn from 'lodash/valuesIn.js';
import FormCard from '../components/Forms/FormCard.vue';
import modalConfirm from '../mixins/modalConfirm.js';

export default {
  name: 'PageNewCard',

  components: {
    FormCard
  },
  mixins: [modalConfirm],
  computed: {
    ...mapGetters('auth', ['userRole'])
  },

  data () {
    return {
      // data received from [form-card] component
      formCardData: {},
      // save/delete button is clicked from [form-card] component
      isConfirmButtonClicked: false
    };
  },

  beforeRouteLeave (to, from, next) {
    const arrOfObjectValues = valuesIn(this.formCardData);
    if (arrOfObjectValues.length <= 0 || this.isConfirmButtonClicked) {
      next();
    } else {
      this.$_modalConfirm_call({
        textFields: {
          ...this.$appConstants.confirmTexts.unsavedCardData
        },
        leftBtnAction () {
          next(true);
        },
        rightBtnAction () {
          next(false);
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
