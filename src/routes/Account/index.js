import AccountContainer from './containers/Account'
import { fetchPhotos, fetchVideos, fetchMusic } from 'store/content'
export default (store) => ({
  path: 'account',
  getComponent (nextState, cb) {
    const state = store.getState()
    const username = state.auth.getIn(['user', 'username'])
    const promises = [
      store.dispatch(fetchPhotos(username)),
      store.dispatch(fetchVideos(username)),
      store.dispatch(fetchMusic(username))
    ]
    Promise.all(promises).then(() => {
      cb(null, AccountContainer)
    })
    cb(null, AccountContainer)
  }
})
