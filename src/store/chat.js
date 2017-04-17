import { Record, OrderedMap, fromJS } from 'immutable'
import log from 'middleware/logger'
import api from 'middleware/api'

const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'
const RECEIVE_PARTICIPANTS = 'RECEIVE_PARTICIPANTS'

const MessagesData = new Record({
  loaded: false,
  conversations: OrderedMap(),
  messages: OrderedMap()
})

//
// Actions & Action Creators
//
export function receiveConversations (payload) {
  return {
    type: RECEIVE_CONVERSATIONS,
    payload
  }
}

export function receiveMessages (payload) {
  return {
    type: RECEIVE_MESSAGES,
    payload
  }
}

export function fetchConversations () {
  return (dispatch, getState) => {
    const state = getState()
    log.debug('messages::fetchConversations::initial')
    return api.get('/conversations')
      .then(({ data }) => {
        log.debug('messages::fetchConversations::response', data)
        // dispatch(receiveParticipants(norm))
        dispatch(receiveConversations(data))
        return data
      })
      .catch((e) => log.error(e))
  }
}

//
// Action Handlers
//
const initialState = new MessagesData()

const ACTION_HANDLERS = {
  [RECEIVE_CONVERSATIONS]: (state, { payload }) => {
    if (payload.length > 0) {
      const conversations = fromJS(payload)
      return state.mergeIn(['conversations'], conversations)
    } else {
      return state
    }
  },
  [RECEIVE_MESSAGES]: (state, { payload }) => {
    return state
  }
}

export default function messagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
