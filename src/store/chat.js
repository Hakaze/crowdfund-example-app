import { Record, OrderedMap, fromJS } from 'immutable'
import log from 'middleware/logger'
import api from 'middleware/api'

const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'

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
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function fetchMessages (id) {
  return (dispatch, getState) => {
    log.debug('messages::fetchMessages::initial')
    return api.get(`/conversation/${id}/messages`)
      .then(({ data }) => {
        log.debug('messages::fetchConversations::response', data)
        // dispatch(receiveParticipants(norm))
        dispatch(receiveMessages(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function sendMessage (convoId, message) {
  return (dispatch, getState) => {
    log.debug('messages::sendMessage::initial')
    const body = JSON.stringify({
      message
    })
    return api.post(`/conversation/${convoId}/messages`, body)
      .then(({ data }) => {
        log.debug('messages::sendMessage::response', data)
        dispatch(receiveMessages(data))
        return Promise.resolve(data)
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
    if (payload.length) {
      let _state = state
      payload.forEach((v, k) => {
        _state = _state.setIn(['conversations', `${v.id}`], fromJS(v))
      })
      return _state
    } else {
      return state
    }
  },
  [RECEIVE_MESSAGES]: (state, { payload }) => {
    if (payload.length) {
      let _state = state
      if (_state.messages.has(`${payload[0].conversationId}`)) {
        let msgList = _state.getIn(['messages', `${payload[0].conversationId}`])
        msgList = msgList.concat(fromJS(payload))
        _state = _state.setIn(['messages', `${payload[0].conversationId}`], msgList)
      } else {
        const data = payload
        _state = _state.setIn(['messages', `${payload[0].conversationId}`], fromJS(data))
      }
      return _state
    } else {
      return state
    }
  }
}

export default function messagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
