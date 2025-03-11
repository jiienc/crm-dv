import { REPORTS_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const reportsNavigationConfig: NavigationTree[] = [
  {
    key: 'reports',
    path: '',
    title: 'Reports',
    translateKey: 'nav.reports',
    icon: 'groupMenu',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: 'columns',
        columns: 4,
      },
    },
    subMenu: [
      {
        key: 'reports.report',
        path: `${REPORTS_PREFIX_PATH}/report`,
        title: 'Report',
        translateKey: 'nav.report',
        icon: 'report',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.reportDesc',
            label: 'Report List',
          },
        },
        subMenu: [],
      },
      {
        key: 'reports.attendance',
        path: `${REPORTS_PREFIX_PATH}/attendance`,
        title: 'Attendance',
        translateKey: 'nav.attendance',
        icon: 'attendance',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.attendanceDesc',
            label: 'Attendance List',
          },
        },
        subMenu: [],
      },
    ],
  },
]

export default reportsNavigationConfig
