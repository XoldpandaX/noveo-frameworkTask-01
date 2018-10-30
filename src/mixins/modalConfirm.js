import { createNamespacedHelpers } from 'vuex';
import modalNames from '../constants/modal-names';

const { mapActions } = createNamespacedHelpers('ui');

export default {
  methods: {
    ...mapActions([
      'showModal',
      'closeAllModals'
    ]),
    $_modalConfirm_call ({ textFields, leftBtnAction = () => {}, rightBtnAction = () => {} }) {
      this.showModal({ id: modalNames.confirm,
        config: {
          title: textFields.title,
          leftButton: {
            text: textFields.leftBtn,
            action: () => {
              leftBtnAction();
              this.closeAllModals();
            }
          },
          rightButton: {
            text: textFields.rightBtn,
            action: () => {
              rightBtnAction();
              this.closeAllModals();
            }
          }
        }
      });
    }
  }
};
