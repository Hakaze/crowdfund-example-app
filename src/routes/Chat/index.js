import { fetchConversations } from 'store/chat'
import ChatContainer from './containers/Chat'

export default (store) => ({
  path: 'chat(/:conversation)',
  getComponent (nextState, cb) {
    store.dispatch(fetchConversations())
      .then(() => {
        cb(null, ChatContainer)
      })
  }
})
