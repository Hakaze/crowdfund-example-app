import { connect } from 'react-redux'
import SignUpView from '../components/SignUpView'
import { signup } from 'store/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doSignup: (payload) => dispatch(signup(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView)
