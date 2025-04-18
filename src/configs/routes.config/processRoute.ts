import { lazy } from 'react'
import { PROCESS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const processRoute: Routes = [
    {
        key: 'process.leads',
        path: `${PROCESS_PREFIX_PATH}/leads`,
        component: lazy(() => import('@/views/process/leads/LeadsList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.events',
        path: `${PROCESS_PREFIX_PATH}/events`,
        component: lazy(() => import('@/views/process/events/Calendar')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'process.opportunities',
        path: `${PROCESS_PREFIX_PATH}/opportunities`,
        component: lazy(() => import('@/views/process/opportunities/OpportunitiesList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.tickets',
        path: `${PROCESS_PREFIX_PATH}/tickets`,
        component: lazy(() => import('@/views/process/tickets/TicketsList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.quotation',
        path: `${PROCESS_PREFIX_PATH}/quotation`,
        component: lazy(() => import('@/views/process/quotation/QuotationList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default processRoute
