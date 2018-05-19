<template lang="pug">
  .card
    template(v-if="cardView === 'text-card'")
      .card__content
        h2 {{cardData.title}}
        p {{cardData.description}}
      footer(v-if="cardView === 'text-card'")
        .edit-btn(@click="redirectToEditCard")
        .like-btn(@click="sendCardID" :class="{'like-btn--active' : cardData.like}")

    template(v-if="cardView !== 'text-card'")
      .card__content.card__content--form
        input(type="text",
              placeholder="Enter title",
              maxlength="42",
              v-model="userInput.title")
        div
          textarea(placeholder="Enter description",
                   :maxlength="maxSymbols",
                   v-model="userInput.description")
          span {{symbolsLeft}}/{{maxSymbols}}
        .card__button-row
          button(v-if="cardView !== 'form-card'" ,
               @click.prevent="formDataToStore") delete
          button(@click.prevent="formDataToStore") save
</template>
<script src="./Card.js"></script>