import { lazy } from 'react'
import { REPORTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const reportsRoute: Routes = [
  {
    key: 'reports.report',
    path: `${REPORTS_PREFIX_PATH}/report`,
    component: lazy(() => import('@/views/reports/report/Report')),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  {
    key: 'reports.attendance',
    path: `${REPORTS_PREFIX_PATH}/attendance`,
    component: lazy(() => import('@/views/reports/attendance/AttendanceList')),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
]

export default reportsRoute
