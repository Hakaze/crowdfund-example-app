import { Record } from 'immutable'
import jwtDecode from 'jwt-decode'
import log from 'middleware/logger'
import { browserHistory } from 'react-router'
import api from 'middleware/api'
import { Profile } from 'store/profile'

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'
export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER'
export const RECEIVE_ACCOUNT_INFO = 'RECEIVE_ACCOUNT_INFO'

const Auth = new Record({
  isAuthenticating: false,
  isAuthenticated: false,
  resetPassword: false,
  hasError: false,
  errors: null,
  token: null,
  user: null
})

export function authLoginRequest (payload) {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload
  }
}

export function authLoginSuccess (payload) {
  localStorage.setItem('token', payload.token)
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload
  }
}

export function authSignupSuccess (payload) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload
  }
}

export function authLoginFailure (payload) {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload
  }
}

export function receiveAccountInfo (payload) {
  return {
    type: RECEIVE_ACCOUNT_INFO,
    payload
  }
}

export function logout () {
  localStorage.removeItem('token')
  browserHistory.replace('/')
  return {
    type: AUTH_LOGOUT_USER
  }
}

export const loginWithToken = (token, redirect = null) => {
  return (dispatch, getState) => {
    dispatch(authLoginRequest())
    log.debug('Auth::loginWithToken::initial')
    return api.get('/users/authenticate')
      .then(({ data }) => {
        dispatch(authLoginSuccess(data))
        return data
      })
      .catch((e) => dispatch(authLoginFailure(e)))
  }
}

export const login = (payload, redirect = null) => {
  return (dispatch, getState) => {
    dispatch(authLoginRequest(payload))
    log.debug('Auth::login::initial', payload)
    const body = JSON.stringify({
      email: payload.email,
      password: payload.password
    })
    return api.post('/users/authenticate', body)
      .then(({ data }) => {
        dispatch(authLoginSuccess(data))
      })
      .catch((e) => dispatch(authLoginFailure(e)))
  }
}

export const signup = (payload) => {
  return (dispatch, getState) => {
    dispatch(authLoginRequest(payload))
    log.debug('Auth::login::initial', payload)
    const body = JSON.stringify({
      email: payload.email,
      password: payload.password,
      first_name: payload.firstName,
      last_name: payload.lastName
    })
    return api.post('/users/signup', body)
      .then(({ data }) => {
        log.debug('Auth::login::response', data)
        dispatch(authSignupSuccess(data))
        browserHistory.replace(`/profile/${data.id}`)
      })
      .catch((e) => dispatch(authLoginFailure(e)))
  }
}

export const saveAccountInfo = (payload) => {
  return (dispatch, getState) => {
    log.debug('Auth::saveAccountInfo::initial', payload)
    return api.patch(`/user`)
      .then(({ data }) => {
        log.debug('Auth::saveAccountInfo::response', data)
        dispatch(receiveAccountInfo(data))
      })
      .catch((e) => log.error(e))
  }
}

export const actions = {
  login,
  logout,
  signup,
  saveAccountInfo
}

const initialState = new Auth()

const ACTION_HANDLERS = {
  [AUTH_LOGIN_REQUEST]: (state, { payload }) => {
    return state.set('isAuthenticating', true)
  },
  [AUTH_LOGIN_SUCCESS]: (state, { payload }) => {
    return state.set('isAuthenticating', false)
      .set('token', payload.token)
      .set('user', new Profile(payload))
      .set('isAuthenticated', true)
      .set('hasError', false)
  },
  [AUTH_LOGIN_FAILURE]: (state, { payload }) => {
    return state.set('isAuthenticating', false)
      .set('hasError', payload)
  },
  [AUTH_LOGOUT_USER]: (state) => {
    return state.set('isAuthenticated', false)
      .set('token', null)
      .set('user', null)
  },
  [RECEIVE_ACCOUNT_INFO]: (state, { payload }) => {
    return state.set('user', payload)
  }
}

export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
