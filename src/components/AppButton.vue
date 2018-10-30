<template lang="pug">
  button.app-button(
  @click.prevent="clicked"
  :class="arrayOfClasses"
  :style="buttonSize"
  )
    slot
</template>

<script>
import CONSTANTS from '../constants';

export default {
  name: 'AppButton',
  props: {
    type: {
      type: String
    },
    size: {
      type: Object
    }
  },
  data () {
    return {
      componentButtonTypes: []
    };
  },
  computed: {
    arrayOfClasses () {
      if (this.type) {
        let obj = this.componentButtonTypes.find(el => el.type === this.type);
        return obj.classes;
      }
    },
    buttonSize () {
      if (this.size) {
        return this.size;
      }
    }
  },
  methods: {
    clicked () {
      this.$emit('btnClicked');
    }
  },
  created () {
    this.componentButtonTypes = CONSTANTS.buttonTypes;
  }
};
</script>
