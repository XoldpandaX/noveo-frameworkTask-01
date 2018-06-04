const navigationElements = {
  defaultNav: [
    {
      id: 0,
      title: 'Register',
      isActive: false,
      icon: '',
      // todo добавить иконки
      whichModalIsShow: 'modal-name'
      //todo добавить модаль, которая будут появляться по нажатию
    },
    {
      id: 1,
      title: 'Log in',
      isActive: false,
      icon: '',
      // todo добавить иконки
      whichModalIsShow: 'modal-name'
      //todo добавить модаль, которая будут появляться по нажатию
    }
  ]
};

export const defaultState = {
  modals: [],
  navigationBar: navigationElements.defaultNav
};