import { lazy } from 'react'
import { DASHBOARD_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardRoute: Routes = [
    {
        key: 'dashboard',
        path: DASHBOARD_PREFIX_PATH,
        component: lazy(() => import('@/views/dashboard/EcommerceDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default dashboardRoute
