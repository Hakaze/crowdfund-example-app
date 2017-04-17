import { Record } from 'immutable'
import log from 'middleware/logger'
import api from 'middleware/api'

const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const Profile = new Record({
  id: null,
  firstName: null,
  lastName: null,
  password: null,
  email: null,
  username: null,
  stageName: null,
  accountType: null,
  artForm: null,
  artFormType: null,
  primaryModelType: null,
  otherModelTypes: null,
  primaryGenre: null,
  otherGenres: null,
  location: null,
  bioAbout: null,
  bioAreaFocus: null,
  bioInterests: null,
  bioSkills: null,
  hairColor: null,
  hairLength: null,
  shoeSize: null,
  dressJacketSize: null,
  height: null,
  weight: null,
  chestSize: null,
  cupSize: null,
  waistSize: null,
  hipsSize: null,
  ethnicity: null
})

export function receiveProfile (payload) {
  return {
    type: RECEIVE_PROFILE,
    payload
  }
}

export function fetchByUsername (id) {
  return (dispatch, getState) => {
    log.debug('Profile::fetch::initial', id)
    return api.get(`/user/${id}`)
      .then(({ data }) => {
        log.debug('Profile::fetch::response', data)
        dispatch(receiveProfile(data))
        return data
      })
      .catch((e) => log.error(e))
  }
}

const initialState = new Profile()

const ACTION_HANDLERS = {
  [RECEIVE_PROFILE]: (state, { payload }) => {
    if (payload) {
      const newProfile = new Profile(payload)
      return state.mergeDeep(newProfile)
    } else {
      return state
    }
  }
}

export default function profileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
