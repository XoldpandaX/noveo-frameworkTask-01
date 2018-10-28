<template lang="pug">
  .card-list
    .card-list__cards-container
      .card-list__element
        .card-button-add
          app-button(
          @btnClicked="() => $router.push({ name: 'new-card' })"
          type="roundWithPlusIcon"
          )
      .card-list__element(v-for="card in cards")
        card-info(
        :key="card.id"
        :card="card"
        )
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
