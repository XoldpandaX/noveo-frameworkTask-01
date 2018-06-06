const navigationElements = {
  defaultNav: [
    {
      id: 0,
      isActive: false,
      title: 'sign up',
      iconClass: '-violet',
      action: '',
      whichModalIsShow: 'modal-name'
    },
    {
      id: 1,
      isActive: false,
      title: 'sign in',
      iconClass: '-orange',
      action: '',
      whichModalIsShow: 'modal-name'
    }
  ]
};

export const defaultState = {
  modals: [],
  navigationBar: navigationElements.defaultNav
};