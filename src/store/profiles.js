import { Record, OrderedMap, fromJS } from 'immutable'

const Profile = new Record({
  firstName: null,
  lastName: null,
  stageName: null,
  coverPhoto: null,
  avatar: null,
  accountType: null,
  artForm: null,
  mainGenre: null,
  otherGenres: null,
  location: null
})

const ProfileData = new Record({
  list: OrderedMap(),
  saveStatus: null,
  requestPending: null
})

let initialState = new ProfileData()
const prof1 = new Profile({
  id: 1439,
  firstName: 'Elijah',
  lastName: 'Rock',
  stageName: 'Elijah Rock',
  coverPhoto: '/img/elijah-rock.png',
  avatar: 'https://lh5.googleusercontent.com/-yBeFfU2wnUQ/AAAAAAAAAAI/AAAAAAAAQwI/E49deHrzbpY/photo.jpg',
  accountType: 'artist',
  artForm: 'music',
  mainGenre: 'Jazz',
  otherGenres: ['Blues', 'Opera'],
  location: 'Los Angeles, CA'
})
initialState = initialState.mergeDeepIn(['list'], fromJS({'1439': prof1}))
const ACTION_HANDLERS = {}

export default function profileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
