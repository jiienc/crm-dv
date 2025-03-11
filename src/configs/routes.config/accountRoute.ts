import { lazy } from 'react'
import { ACCOUNT_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const accountRoute: Routes = [
    {
        key: 'account',
        path: ACCOUNT_PREFIX_PATH,
        component: lazy(() => import('@/views/account/Settings')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default accountRoute
