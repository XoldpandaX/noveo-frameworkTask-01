<template lang="pug">
  button.sort-btn(
  @click="getCardsByDate"
  :class="[btnClass]"
  ) sort by date
    .arrow-icon
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ButtonSortCardByDate',

  data () {
    return {
      sortTypes: ['desc', 'asc'],
      currentSortType: 'desc'
    };
  },

  computed: {
    btnClass () {
      return this.currentSortType === 'desc' ? '' : 'sort-btn--down';
    }
  },

  methods: {
    ...mapActions('cards', ['getCardsFromServer']),

    getCardsByDate () {
      this.getCardsFromServer({
        sort: this.currentSortType,
        order_by: 'created_at'
      });

      this.currentSortType = this.currentSortType === 'desc' ? this.sortTypes[1] : this.sortTypes[0];
    }
  }
};
</script>

<style lang="scss" scoped>
  .sort-btn {
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrow-icon {
      margin-left: 10px;
      transform: rotate(180deg);
    }

    &--down {
      .arrow-icon {
        transform: rotate(0deg);
      }
    }
  }
</style>
