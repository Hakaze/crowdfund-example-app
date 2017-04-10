import JobsView from './components/JobsView'
import JobDetails from './containers/JobDetails'

// Sync route definition
export default {
  path: 'jobs',
  indexRoute: {
    component: JobsView
  },
  childRoutes: [
    {
      path: ':category/:id',
      component: JobDetails
    }
  ]
}
