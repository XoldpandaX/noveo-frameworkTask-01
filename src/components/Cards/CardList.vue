<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        .card-button-add
          app-button(
          :onClick="() => $router.push({ name: 'new-card' })",
          propButtonType="roundWithPlusIcon"
          )
      .card-list__element(v-for="card in cards")
        card-info(:cardData="card",
                  :key="card.id")
</template>

<script>
import AppButton from '../AppButton.vue';
import CardInfo from './CardInfo.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CardList',

  components: {
    CardInfo,
    AppButton
  },

  computed: {
    ...mapGetters('cards', ['cards'])
  }
};
</script>
