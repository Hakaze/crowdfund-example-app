import LandingLayout from '../layouts/LandingLayout'
import CoreLayout from '../layouts/CoreLayout'
import Landing from './Landing'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'

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
        Login,
        SignUp,
        Profile
      ]
    }
  ]
})

export default createRoutes
