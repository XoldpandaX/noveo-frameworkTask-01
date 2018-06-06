const navigationElements = {
  defaultNav: [
    {
      id: 0,
      isActive: false,
      title: 'sign up',
      iconClass: '-violet',
      action: 'showModal',
      whichModalIsShow: 'modal-name'
    },
    {
      id: 1,
      isActive: false,
      title: 'sign in',
      iconClass: '-orange',
      action: 'showModal',
      whichModalIsShow: 'modal-name'
    }
  ]
};

export const defaultState = {
  modals: [],
  navigationBar: navigationElements.defaultNav
};