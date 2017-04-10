import { Record, OrderedMap, fromJS } from 'immutable'

const Profile = new Record({
  firstName: null,
  lastName: null,
  stageName: null,
  coverPhoto: null,
  avatar: null,
  accountType: null,
  artForm: null,
  bio_about: null,
  bio_interests: null,
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
  artFormSubType: 'Vocalist',
  bio_about: 'Actor/Singer/Writer/Producer/Dancer and self-proclaimed “Artrepreneur” Elijah Rock has left few stones unturned in his quest for performance art excellence since leaving his native Cleveland, Ohio. He not only seeks out challenging creative opportunities, he creates them – in the spotlight and behind the scenes.',
  bio_interests: [
    { label: 'Modeling: Fan' },
    { label: 'Music: Artist - Vocalist | Jazz - Blues - Opera' }
  ],
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
