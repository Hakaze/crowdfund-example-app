import LandingLayout from '../layouts/LandingLayout'
import CoreLayout from '../layouts/CoreLayout'
import Landing from './Landing'
import SignUp from './SignUp'

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
        SignUp
      ]
    }
  ]
})

export default createRoutes
