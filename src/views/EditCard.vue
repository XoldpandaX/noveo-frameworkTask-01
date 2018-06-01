<template lang="pug">
  section.edit-card.page(v-if="showPage")
    .container
      h1 Edit Selected Card Data
      .edit-card__row
        card-edit(:data="cardData")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import CardEdit from './../containers/CardEdit.vue';

  export default {
    name: 'edit-card',
    props: {
      id: {
        type: String
      }
    },
    components: {
      CardEdit
    },
    data() {
      return {
        showPage: false,
        cardData: {
          id: '',
          title: '',
          description: ''
        }
      };
    },
    computed: {
      ...mapGetters('cards', ['cards', 'getCardByID'])
    },
    methods: {
      ...mapActions('cards', ['searchCardsById']),

      redirectTo() {
        this.$router.push({path: '/'});
      },
      routeDataHandler() {
        let redirect = false;

        this.cards.some(el => {
          if (el.id === `#${this.id}`) {
            let {title, description, id} = el;
            this.cardData.title = title;
            this.cardData.description = description;
            this.cardData.id = id;

            this.showPage = true;
          }
        });

        if(redirect === this.showPage) {
          this.redirectTo();
        }
      }
    },
    created() {
      console.log(this.getCardByID(`#${this.id}`));
      this.routeDataHandler();
    }
  }
</script>