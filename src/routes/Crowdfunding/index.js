import CrowdfundView from './components/CrowdfundView'
import CrowdfundInfoView from './components/CrowdfundInfoView'

export default {
  path: 'crowdfund',
  indexRoute: {
    component: CrowdfundView
  },
  childRoutes: [
    {
      path: 'info',
      component: CrowdfundInfoView
    }
  ]
}
