export default {
  isAuthenticated: state => !!state.status,
  authStatus: state => state.status,
  userRole: state => state.user.role,
  userData: state => state.user
}
