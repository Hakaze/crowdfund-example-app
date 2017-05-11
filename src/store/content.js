import { Record, fromJS } from 'immutable'
import log from 'middleware/logger'
import api from 'middleware/api'

const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
const RECEIVE_MUSIC = 'RECEIVE_MUSIC'

const Content = new Record({
  photos: fromJS({}),
  videos: fromJS({}),
  music: fromJS({})
})

//
// Actions & Action Creators
//
export function receivePhotos (payload) {
  return {
    type: RECEIVE_PHOTOS,
    payload
  }
}

export function receiveVideos (payload) {
  return {
    type: RECEIVE_VIDEOS,
    payload
  }
}

export function receiveMusic (payload) {
  return {
    type: RECEIVE_MUSIC,
    payload
  }
}

export function uploadPhotos (file) {
  return (dispatch, getState) => {
    log.debug('Content::upload::initial')
    const headers = { 'Content-Type': 'multipart/form-data' }
    const formData = new FormData()
    formData.append('file', file)
    return api.post(`/user/photos`, formData, { headers })
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receivePhotos(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function uploadMusic (file) {
  return (dispatch, getState) => {
    log.debug('Content::upload::initial')
    const track = JSON.stringify({
      link: file
    })
    return api.post(`/user/tracks`, track)
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receiveMusic(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function uploadVideos (file) {
  return (dispatch, getState) => {
    log.debug('Content::upload::initial')
    const video = JSON.stringify({
      link: file
    })
    return api.post(`/user/videos`, video)
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receiveVideos(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function fetchPhotos (username) {
  return (dispatch, getState) => {
    log.debug('Content::fetch::initial', username)
    return api.get(`/user/${username}/photos`)
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receivePhotos(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function fetchVideos (username) {
  return (dispatch, getState) => {
    log.debug('Content::fetch::initial', username)
    return api.get(`/user/${username}/videos`)
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receiveVideos(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

export function fetchMusic (username) {
  return (dispatch, getState) => {
    log.debug('Content::fetch::initial', username)
    return api.get(`/user/${username}/tracks`)
      .then(({ data }) => {
        log.debug('Content::upload::response', data)
        dispatch(receiveMusic(data))
        return Promise.resolve(data)
      })
      .catch((e) => log.error(e))
  }
}

//
// Action Handlers
//
const initialState = new Content()

const ACTION_HANDLERS = {
  [RECEIVE_PHOTOS]: (state, { payload }) => {
    if (payload.length) {
      let _state = state
      payload.forEach((v, k) => {
        _state = _state.setIn(['photos', `${v.id}`], fromJS(v))
      })
      return _state
    } else {
      return state
    }
  },
  [RECEIVE_VIDEOS]: (state, { payload }) => {
    if (payload.length) {
      let _state = state
      payload.forEach((v, k) => {
        _state = _state.setIn(['videos', `${v.id}`], fromJS(v))
      })
      return _state
    } else {
      return state
    }
  },
  [RECEIVE_MUSIC]: (state, { payload }) => {
    if (payload.length) {
      let _state = state
      payload.forEach((v, k) => {
        _state = _state.setIn(['music', `${v.id}`], fromJS(v))
      })
      return _state
    } else {
      return state
    }
  }
}

export default function contentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
