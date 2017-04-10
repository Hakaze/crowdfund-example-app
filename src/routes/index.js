import LandingLayout from '../layouts/LandingLayout'
import CoreLayout from '../layouts/CoreLayout'
import Landing from './Landing'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import Jobs from './Jobs'
import Privacy from './Privacy'
import Terms from './Terms'
import Crowdfunding from './Crowdfunding'
import Pricing from './Pricing'

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
        Profile,
        Jobs,
        Privacy,
        Terms,
        Crowdfunding,
        Pricing
      ]
    }
  ]
})

export default createRoutes
