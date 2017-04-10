import { connect } from 'react-redux'
import JobDetailsView from '../components/JobDetailsView'
import Jobs from '../modules/Jobs'

const mapStateToProps = (state, ownProps) => {
  const jobId = parseInt(ownProps.params.id)
  const jobCat = ownProps.params.category
  console.log('blah')
  return {
    jobDetails: Jobs[jobCat][jobId],
    jobCategory: jobCat
  }
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps)(JobDetailsView)
