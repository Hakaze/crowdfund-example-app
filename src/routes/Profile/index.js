import ViewContainer from './containers/View'
import { fetchByUsername } from 'store/profile'
import { fetchPhotos, fetchVideos, fetchMusic } from 'store/content'

export default (store) => ({
  path: 'profile/:id',
  onEnter: (nextState, replace, cb) => {
    const username = nextState.params.id
    const promises = [
      store.dispatch(fetchByUsername(username)),
      store.dispatch(fetchPhotos(username)),
      store.dispatch(fetchVideos(username)),
      store.dispatch(fetchMusic(username))
    ]
    Promise.all(promises).then(() => {
      cb()
    })
  },
  component: ViewContainer
})
