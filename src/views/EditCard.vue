<template lang="pug">
  section.edit-card.page(v-if="showPage")
    .container
      h1 Edit Selected Card Data
      .edit-card__row
        card-edit
</template>

<script>
  import {mapGetters} from 'vuex';
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
        showPage: false
      };
    },
    computed: {
      ...mapGetters('cards', ['cards'])
    },
    methods: {
      redirectTo() {
        this.$router.push({path: '/'});
      },
      routeDataHandler() {
        let redirect = false;

        this.cards.some(el => {
          if (el.id === `#${this.id}`) {
            this.showPage = true;
          }
        });

        if(redirect === this.showPage) {
          this.redirectTo();
        }
      }
    },
    created() {
      this.routeDataHandler();
    }
  }
</script>