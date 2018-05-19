import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'card',
  props: {
    transformComponent: {
      type: String,
      default: 'text-card'
    },
    cardData: {
      type: Object
    },
    editData: {
      type: Object
    }
  },
  data() {
    return {
      maxSymbols: 196,
      userInput: {
        title: '',
        description: ''
      }
    };
  },
  computed: {
    ...mapGetters('cards', ['cards']),
    
    cardView() {
      switch (this.transformComponent) {
        case 'edit-form-card':
          return 'edit-form-card';
        case 'form-card':
          return 'form-card';
        default:
          return 'text-card';
      }
    },
    symbolsLeft() {
      return this.userInput.description.length;
    }
  },
  methods: {
    ...mapActions('cards', ['addCardDataToStore', 'likeToggle']),
  
    formDataToStore() {
      const {title, description} = this.userInput;
    
      if (title !== '' && description !== '') {
        const storeData = {
          id: this.editData ? this.editData.id : `#${this.cards.length + 1}`,
          title: title,
          description: description,
          like: false
        };
        
        const sendData = {
          storeData,
          edited: !!this.editData
        };
        
        this.addCardDataToStore(sendData);
        this.redirectToHome();
      } else {
        alert('Enter some text');
      }
    },
    displayEditData() {
      if (this.editData) {
        const {title, description} = this.editData;
        this.userInput.title = title;
        this.userInput.description = description;
      }
    },
    sendCardID() {
      const cardId = this.cardData.id;
      this.likeToggle(cardId);
    },
    redirectToHome() {
      this.$router.push({name: 'home'});
    },
    redirectToEditCard() {
      const regExp = /\D+/ig;
      const id = this.cardData.id.replace(regExp, '');
      
      this.$router.push({path: `/edit-card/${id}`})
    }
  },
  created() {
    this.displayEditData();
  }
};