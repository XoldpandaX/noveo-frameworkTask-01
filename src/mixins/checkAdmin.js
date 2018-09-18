import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
    
    };
  },
  
  computed: {
    ...mapGetters('auth', ['userRole'])
  },
  
  methods: {
    ...mapActions('ui', ['showNotification']),
    
    $_checkAdminMixin_checkAdmin() {
      return new Promise((resolve, reject) => {
        switch(this.userRole) {
          case 'admin':
            resolve();
            break;
          default:
            reject(() => {
              return this.showNotification({
                errNum: 0,
                errMsg: 'Only an ADMINISTRATOR can do this !'
              });
            });
        }
      });
    },
    
    $_checkAdminMixin_enableFunctionComplete(func) {  // enable or (if role !== admin) disable
      this.$_checkAdminMixin_checkAdmin().then(() => {
        func();
      }).catch((notificationError) => {
        notificationError();
      });
    }
  }
}
