<template lang="pug">
  .card
    template(v-if="cardView === 'text-card'")
      .card__content
        h2 Its Title
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos facere iure laboriosam nam non odit vitae. Aliquam expedita necessitatibus ratione temporibus? Dolores, necessitatibus, quam.
      footer(v-if="cardView === 'text-card'")
        .edit-btn
        .like-btn(@click="active = !active", :class="{ 'like-btn--active' : active }")

    template(v-if="cardView === 'denis'")
      .card__content.card__content--form
        input(type="text",
              placeholder="Enter title", maxlength="42")
        div
          textarea(placeholder="Enter description",
                   :maxlength="maxSymbols",
                   v-model="userInput.description")
          span {{symbolsLeft}}/{{maxSymbols}}
        button add
</template>

<script>
  export default {
    name: 'card',
    props: {
      transformComponent: {
        type: String,
        default: 'text-card'
      }
    },
    data() {
      return {
        active: false,
        maxSymbols: 196,
        userInput: {
          title: '',
          description: ''
        }
      };
    },
    computed: {
      cardView() {
        switch (this.transformComponent) {
          case 'text-card':
            return 'text-card';
          case 'denis':
            return 'denis';
        }
      },
      symbolsLeft() {
        return this.userInput.description.length;
      }
    }
  };
</script>