import { ACCOUNT_PREFIX_PATH } from '@/constants/route.constant'
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const accountNavigationConfig: NavigationTree[] = [
  {
    key: 'account',
    path: ACCOUNT_PREFIX_PATH,
    title: 'Account',
    translateKey: 'nav.account',
    icon: 'account',
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

export default accountNavigationConfig
