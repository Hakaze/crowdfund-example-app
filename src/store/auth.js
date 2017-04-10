import { Record } from 'immutable'
import jwtDecode from 'jwt-decode'
import log from 'middleware/logger'
import { browserHistory } from 'react-router'

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'
export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER'

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

export function logout () {
  localStorage.removeItem('token')
  return {
    type: AUTH_LOGOUT_USER
  }
}

export const loginWithToken = (token, redirect = null) => {
  return (dispatch, getState) => {
    try {
      const user = jwtDecode(token).user
      dispatch(authLoginSuccess({ user, token }))
    } catch (e) {
      log.debug('Auth::login::response', e)
    }
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
    const ops = { method: 'POST', body }
    return fetch('/auth/login', ops)
      .then(({ data }) => {
        try {
          const token = data.token
          const user = jwtDecode(token).user
          dispatch(authLoginSuccess({ user, token }))
          browserHistory.replace('/dashboard')
        } catch (e) {
          dispatch(authLoginFailure(e))
        }
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
    const ops = { method: 'POST', body }
    return fetch('/auth/register', ops)
      .then(({ data }) => {
        log.debug('Auth::login::response', data)
        try {
          const token = data.token
          const user = jwtDecode(data.token).user
          dispatch(authSignupSuccess({ user, token }))
          browserHistory.replace('/dashboard')
        } catch (e) {
          log.debug('Auth::login::response', e)
          dispatch(authLoginFailure(e))
        }
      })
      .catch((e) => dispatch(authLoginFailure(e)))
  }
}

export const actions = {
  login,
  logout,
  signup
}

const initialState = new Auth()

const ACTION_HANDLERS = {
  [AUTH_LOGIN_REQUEST]: (state, { payload }) => {
    return state.set('isAuthenticating', true)
  },
  [AUTH_LOGIN_SUCCESS]: (state, { payload }) => {
    return state.set('isAuthenticating', false)
      .set('token', payload.token)
      .set('user', payload.user)
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
  }
}

export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
