import { DASHBOARD_PREFIX_PATH } from '@/constants/route.constant'
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const dashboardNavigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: DASHBOARD_PREFIX_PATH,
    title: 'Dashboard',
    translateKey: 'nav.dashboard',
    icon: 'home',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: 'default',
      },
    },
    subMenu: [],
  },
]

export default dashboardNavigationConfig
