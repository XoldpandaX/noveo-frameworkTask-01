<template lang="pug">
  button.app-button(@click="onClick",
                    :class="arrayOfClasses")
    slot
</template>

<script>
  import CONSTANTS from '../constants';

  export default {
    name: 'AppButton',

    props: {
      propButtonType: {
        type: String
      },

      onClick: {
        type: Function,
        required: true
      }
    },

    data() {
      return {
        componentButtonTypes: []
      };
    },

    computed: {
      arrayOfClasses() {
        if (!!this.propButtonType) {
          let obj = this.componentButtonTypes.find(el => el.type === this.propButtonType);
          return obj.classes;
        }
      }
    },

    created() {
      this.componentButtonTypes = CONSTANTS.buttonTypes;
    }
  }
</script>