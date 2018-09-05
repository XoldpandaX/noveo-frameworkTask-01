export default {
  isAuthenticated: state => !!state.status,
  authStatus: state => state.status,
  userRole: state => state.user.role,
  userData: state => {
    const { email, id, name, role, created_at }  = state.user;
    return {
      id,
      email,
      name,
      role,
      created_at
    }
  }
}
