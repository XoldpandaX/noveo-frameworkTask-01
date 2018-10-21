<template lang="pug">
  button.app-button(
  @click.prevent="onClick"
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
    onClick: {
      type: Function,
      required: true
    },

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

  created () {
    this.componentButtonTypes = CONSTANTS.buttonTypes;
  }
};
</script>
