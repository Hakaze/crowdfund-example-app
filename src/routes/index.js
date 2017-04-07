import LandingLayout from '../layouts/LandingLayout'
import CoreLayout from '../layouts/CoreLayout'
import Landing from './Landing'
import SignUp from './SignUp'
import Jobs from './Jobs'

export const createRoutes = (store) => ({
  path : '/',
  childRoutes: [
    {
      component : LandingLayout,
      indexRoute: Landing
    },
    {
      component : CoreLayout,
      childRoutes: [
        SignUp,
        Jobs
      ]
    }
  ]
})

export default createRoutes
