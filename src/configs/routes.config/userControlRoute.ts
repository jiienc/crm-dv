import { lazy } from 'react'
import { USERCONTROL_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const userControlRoute: Routes = [
  {
    key: 'userControl.accessControl.users',
    path: `${USERCONTROL_PREFIX_PATH}/access-control/users`,
    component: lazy(
      () => import('@/views/userControl/accessControl/users/UsersList'),
    ),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  {
    key: 'userControl.accessControl.access',
    path: `${USERCONTROL_PREFIX_PATH}/access-control/access`,
    component: lazy(
      () => import('@/views/userControl/accessControl/access/AccessList'),
    ),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  {
    key: 'userControl.accessControl.auditTrail',
    path: `${USERCONTROL_PREFIX_PATH}/access-control/audit-trail`,
    component: lazy(
      () =>
        import('@/views/userControl/accessControl/audittrail/AuditTrailList'),
    ),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  {
    key: 'userControl.accessControl.kpi',
    path: `${USERCONTROL_PREFIX_PATH}/access-control/kpi`,
    component: lazy(() => import('@/views/others/AccessDenied/AccessDenied')),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  {
    key: 'userControl.accessControl.hierarchy',
    path: `${USERCONTROL_PREFIX_PATH}/access-control/hierarchy`,
    component: lazy(
      () => import('@/views/userControl/accessControl/hierarchy/Hierarchy'),
    ),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
]

export default userControlRoute
