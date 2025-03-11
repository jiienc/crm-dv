import dashboardNavigationConfig from './dashboard.navigation.config'
import masterdataNavigationConfig from './master-data.navigation.config'
import processNavigationConfig from './process.navigation.config'
import reportsNavigationConfig from './reports.navigation.config'
import usercontrolNavigationConfig from './user-control.navigation.config'
import accountNavigationConfig from './account.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
  ...dashboardNavigationConfig,
  ...masterdataNavigationConfig,
  ...processNavigationConfig,
  ...reportsNavigationConfig,
  ...usercontrolNavigationConfig,
  ...accountNavigationConfig,
]

export default navigationConfig
