import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    photos: state.content.photos,
    music: state.content.music,
    videos: state.content.videos
  }
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps)(ProfileView)
