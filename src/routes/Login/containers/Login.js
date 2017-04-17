import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from 'store/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: (payload) => dispatch(login(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
