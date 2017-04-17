import { connect } from 'react-redux'
import AccountView from '../components/AccountView'
import { saveAccountInfo } from 'store/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (data) => dispatch(saveAccountInfo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountView)
