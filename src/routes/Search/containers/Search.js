import { connect } from 'react-redux'
import SearchView from '../components/SearchView'
import { fetchResults, clearSearch } from 'store/search'

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.search.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (text, filters) => dispatch(fetchResults(text, filters)),
    clearSearch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
