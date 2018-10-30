export default {
  isAuthenticated: state => !!state.status,
  userData: state => state.user,
  userRole: state => state.userRole
};
