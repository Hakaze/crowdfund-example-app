import ViewContainer from './containers/View'
import { fetchByUsername } from 'store/profile'

export default (store) => ({
  path: 'profile/:id',
  getComponent: (nextState, cb) => {
    store.dispatch(fetchByUsername(nextState.params.id))
      .then(() => {
        cb(null, ViewContainer)
      })
  }
})
