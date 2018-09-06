<template lang="pug">
  transition(enter-active-class="animated fadeInRight")
    li.notification
      p
        span.notification__err-num
          slot(name="error-num")
        span.notification__main-text
          slot(name="error-text")
</template>

<script>
  export default {
    name: 'NotificationElement',

    props: {
      index: {
        type: Number,
        required: true
      },

      lifetime: {
        type: Number,
        default: 4000
      }
    },

    methods: {
      destroyNotification() {
        setTimeout(() => {
          this.$emit('destroy', this.index);
        }, this.lifetime)
      }
    },

    created() {
      this.destroyNotification();
    }
  }
</script>

