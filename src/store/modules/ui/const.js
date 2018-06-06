const navigationElements = {
  defaultNav: [
    {
      id: 0,
      title: 'Register',
      isActive: false,
      icon: '',
      action: '',
      whichModalIsShow: 'modal-name'
    },
    {
      id: 1,
      title: 'Log in',
      isActive: false,
      icon: '',
      action: '',
      whichModalIsShow: 'modal-name'
    }
  ]
};

export const defaultState = {
  modals: [],
  navigationBar: navigationElements.defaultNav
};