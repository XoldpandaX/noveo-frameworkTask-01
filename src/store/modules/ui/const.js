const navigationElements = {
  defaultNav: [
    {
      id: 0,
      isActive: false,
      title: 'sign up',
      route: '/sign-up',
      iconClass: '-violet'
    },
    {
      id: 1,
      isActive: false,
      title: 'sign in',
      route: '/sign-in',
      iconClass: '-orange'
    }
  ]
};

export const defaultState = {
  modals: [],
  navigationBar: navigationElements.defaultNav
};