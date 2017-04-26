import { UserAuthWrapper } from 'redux-auth-wrapper'
import LandingContainer from '../containers/LandingContainer'
import CoreContainer from '../containers/CoreContainer'
import Landing from './Landing'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import Jobs from './Jobs'
import Privacy from './Privacy'
import Terms from './Terms'
import Crowdfunding from './Crowdfunding'
import Pricing from './Pricing'
import Account from './Account'
import Chat from './Chat'
import Search from './Search'
import Contact from './Contact'
import Music from './Music'
import Modeling from './Modeling'

const RequireAuth = UserAuthWrapper({
  authSelector: state => state.auth,
  authenticatingSelector: state => state.auth.get('isAuthenticating'),
  predicate: auth => auth.get('isAuthenticated') && !auth.get('isAuthenticating'),
  failureRedirectPath: '/login',
  wrapperDisplayName: 'Authenticated'
})

const RequirePublic = UserAuthWrapper({
  authSelector: state => state.auth,
  wrapperDisplayName: 'NotAuthenticated',
  predicate: auth => !auth.get('isAuthenticated') && !auth.get('isAuthenticating'),
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/account',
  allowRedirectBack: false
})

export const createRoutes = (store) => ({
  path : '/',
  childRoutes: [
    {
      component : LandingContainer,
      indexRoute: Landing
    },
    {
      component : CoreContainer,
      childRoutes: [
        // Protected
        {
          component: RequireAuth(({ children }) => children),
          childRoutes: [
            Account(store),
            Chat(store)
          ]
        },
        // Public Only
        {
          component: RequirePublic(({ children }) => children),
          childRoutes: [
            SignUp,
            Login(store)
          ]
        },
        Profile(store),
        Jobs,
        Privacy,
        Terms,
        Crowdfunding,
        Pricing,
        Search,
        Contact,
        Music,
        Modeling
      ]
    }
  ]
})

export default createRoutes
