import { connect } from 'react-redux'
import { logout } from 'store/auth'
import LandingLayout from 'layouts/LandingLayout'

const mapStateToProps = (state) => {
  const user = state.auth.user
  return {
    path: state.location,
    user: user
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser () {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayout)
