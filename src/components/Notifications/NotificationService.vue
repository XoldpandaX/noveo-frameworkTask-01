<template lang="pug">
  transition(leave-active-class="animated fadeOutRight")
    ul.notification-service(v-if="notifications.length > 0")
        notification-element(
        v-for="(notification, i) in notifications"
        :key="i"
        )
          template(slot="error-num") {{ `ERROR#${notification.errNum}:` }}
          template(slot="error-text") {{ notification.errMsg }}
</template>

<script>
import { mapGetters } from 'vuex';
import NotificationElement from './NotificationElement.vue';

export default {
  name: 'NotificationService',

  components: {
    NotificationElement
  },

  computed: {
    ...mapGetters('ui', ['notifications'])
  }
};
</script>
