import { Record, fromJS } from 'immutable'
import log from 'middleware/logger'
import config from 'config'
import algoliaInit from 'algoliasearch'

export const algolia = algoliaInit(config.algolia_app_id, config.algolia_search_key)
const index = algolia.initIndex('Users')

const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const RECEIVE_MORE = 'RECEIVE_MORE'
const CLEAR_SEARCH = 'CLEAR_SEARCH'

const Search = new Record({
  results: null
})

//
// Actions & Action Creators
//
export function receiveItems (payload) {
  return {
    type: RECEIVE_ITEMS,
    payload
  }
}

export function receiveMore (payload) {
  return {
    type: RECEIVE_MORE,
    payload
  }
}

export function clearSearch () {
  return {
    type: CLEAR_SEARCH
  }
}

const useFilters = (params) => {
  const query = []
  const paramsMap = new Map(Object.entries(params))

  paramsMap.forEach((value, key) => {
    if (value !== '') {
      query.push(`${key}:${value}`)
    }
  })
  return query.join(' AND ')
}

export function fetchResults (text, filters) {
  return (dispatch, getState) => {
    log.debug('Search::fetch::initial', text)
    const query = text
    const filterString = filters ? useFilters(filters) : null
    const searchParams = { query }
    if (filterString) {
      searchParams.filters = filterString
    }
    console.log(searchParams)
    return index.search(searchParams)
      .then((res) => {
        log.debug('Profile::fetch::response', res)
        dispatch(receiveItems(res))
        return res
      })
      .catch((e) => log.error(e))
  }
}

//
// Action Handlers
//
const initialState = new Search()

const ACTION_HANDLERS = {
  [RECEIVE_ITEMS]: (state, { payload }) => {
    const results = fromJS(payload)
    return state.set('results', results)
  },
  [CLEAR_SEARCH]: (state) => initialState
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
