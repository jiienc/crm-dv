import { USERCONTROL_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const usercontrolNavigationConfig: NavigationTree[] = [
  {
    key: 'userControl',
    path: '',
    title: 'User Control',
    translateKey: 'nav.userControl',
    icon: '',
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
        key: 'userControl.accessControl',
        path: '',
        title: 'Access Control',
        translateKey: 'nav.userControlAccessControl.accessControl',
        icon: 'access',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.userControlAccessControl.accessControlDesc',
            label: 'User Control Section',
          },
        },
        subMenu: [
          {
            key: 'userControl.accessControl.users',
            path: `${USERCONTROL_PREFIX_PATH}/access-control/users`,
            title: 'Users',
            translateKey: 'nav.userControlAccessControl.users',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.userControlAccessControl.usersDesc',
                label: 'User List',
              },
            },
            subMenu: [],
          },
          {
            key: 'userControl.accessControl.access',
            path: `${USERCONTROL_PREFIX_PATH}/access-control/access`,
            title: 'Access',
            translateKey: 'nav.userControlAccessControl.access',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.userControlAccessControl.accessDesc',
                label: 'Access List',
              },
            },
            subMenu: [],
          },
          {
            key: 'userControl.accessControl.auditTrail',
            path: `${USERCONTROL_PREFIX_PATH}/access-control/audit-trail`,
            title: 'Audit Trail',
            translateKey: 'nav.userControlAccessControl.auditTrail',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.userControlAccessControl.accessDesc',
                label: 'Access List',
              },
            },
            subMenu: [],
          },
          {
            key: 'userControl.accessControl.kpi',
            path: `${USERCONTROL_PREFIX_PATH}/access-control/kpi`,
            title: 'KPI',
            translateKey: 'nav.userControlAccessControl.kpi',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.userControlAccessControl.kpiDesc',
                label: 'KPI List',
              },
            },
            subMenu: [],
          },
          {
            key: 'userControl.accessControl.hierarchy',
            path: `${USERCONTROL_PREFIX_PATH}/access-control/hierarchy`,
            title: 'Hierarchy',
            translateKey: 'nav.userControlAccessControl.hierarchy',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.userControlAccessControl.hierarchyDesc',
                label: 'Hierarchy List',
              },
            },
            subMenu: [],
          },
        ],
      },
    ],
  },
]

export default usercontrolNavigationConfig
