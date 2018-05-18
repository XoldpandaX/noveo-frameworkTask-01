<template lang="pug">
  .card
    .card__content
      h2 Its Title
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos facere iure laboriosam nam non odit vitae. Aliquam expedita necessitatibus ratione temporibus? Dolores, necessitatibus, quam.
    footer
      .edit-btn
      .like-btn(@click="active = !active", :class="{ 'like-btn--active' : active }")
</template>

<script>
  export default {
    name: 'card',
    data() {
      return {
        active: false
      };
    }
  };
</script>