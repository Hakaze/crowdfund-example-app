import { combineReducers } from 'redux'
import locationReducer from './location'
import profilesReducer from './profile'
import authReducer from './auth'
import chatReducer from './chat'
import searchReducer from './search'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    auth: authReducer,
    profile: profilesReducer,
    chat: chatReducer,
    search: searchReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
