import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.id)
  return {
    profile: state.profiles.getIn(['list', `${userId}`])
  }
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps)(ProfileView)
