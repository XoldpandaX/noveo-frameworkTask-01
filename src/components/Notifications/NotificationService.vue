<template lang="pug">
  transition(leave-active-class="animated fadeOutRight")
    ul.notification-service(v-if="notifications.length > 0")
        notification-element(v-for="(notification, i) in notifications",
                           :index="i",
                           @destroy="hideNotification(i)")
          template(slot="error-num") {{ `${notification.errorNum}:` }}
          template(slot="error-text") {{ notification.errorText }}
</template>

<script>
  import { mapActions } from 'vuex';
  import NotificationElement from './NotificationElement.vue';

  export default {
    name: 'NotificationService',

    components: {
      NotificationElement
    },

    props: {
      notifications: {
        type: Array,
        required: true
      }
    },

    methods: {
      ...mapActions('ui', ['hideNotification'])
    }
  }
</script>

