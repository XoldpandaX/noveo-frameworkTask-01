export default {
  data() {
    return {
      errorsMessages: {}
    };
  },
  
  methods: {
    setErrorsMessages(obj) {
      this.errorsMessages = obj;
    }
  }
}
