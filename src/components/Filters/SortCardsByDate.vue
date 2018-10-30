<template lang="pug">
  button.sort-btn(
  @click="btnClicked"
  :class="[btnClass]"
  ) sort by date
    .arrow-icon
</template>

<script>
export default {
  name: 'ButtonSortCardByDate',
  data () {
    return {
      sortTypes: ['desc', 'asc'],
      currentSortType: 'asc'
    };
  },
  computed: {
    btnClass () {
      return this.currentSortType === 'desc' ? '' : 'sort-btn--down';
    }
  },
  methods: {
    btnClicked () {
      this.$emit('sortCardsByDate', {
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
