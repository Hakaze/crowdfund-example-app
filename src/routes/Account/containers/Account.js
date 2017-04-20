import { connect } from 'react-redux'
import AccountView from '../components/AccountView'
import { saveAccountInfo } from 'store/auth'
import {
  uploadPhotos,
  uploadMusic,
  uploadVideos
} from 'store/content'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    photos: state.content.photos,
    videos: state.content.videos,
    music: state.content.music,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (data) => dispatch(saveAccountInfo(data)),
    uploadPhotos: (files) => dispatch(uploadPhotos(files[0])),
    uploadMusic: (files) => dispatch(uploadMusic(files[0])),
    uploadVideos: (video) => dispatch(uploadVideos(video))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountView)
