<template lang="pug">
  .first-view-modal
    .first-view-modal__media
      img(src="./../../assets/media/gifs/giphy.gif")
    footer
      h2 {{message.welcomeText}}
      p {{message.description}}
</template>

<script>
  export default {
    name: 'first-load-modal',
    props: {
      message: {
        type: Object,
        default: {
          welcomeText: 'Hello !',
          description: 'This is the first time when you load this app.' +
                       'To add a new card, you can push on plus icon. Enjoy it :)'
        }
      }
    }
  }
</script>