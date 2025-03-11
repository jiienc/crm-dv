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
        key: 'process.oppurtunities',
        path: `${PROCESS_PREFIX_PATH}/oppurtunities`,
        component: lazy(() => import('@/views/process/oppurtunities/OppurtunitiesList')),
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
        key: 'process.requests.sample',
        path: `${PROCESS_PREFIX_PATH}/requests/sample`,
        component: lazy(() => import('@/views/process/requests/sample/SampleList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.requests.productImprovement',
        path: `${PROCESS_PREFIX_PATH}/requests/product-improvement`,
        component: lazy(() => import('@/views/process/requests/product-improvement/ProductImprovementList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.requests.newProduct',
        path: `${PROCESS_PREFIX_PATH}/requests/new-product`,
        component: lazy(() => import('@/views/process/requests/new-product/NewProductList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'process.requests.return',
        path: `${PROCESS_PREFIX_PATH}/requests/return`,
        component: lazy(() => import('@/views/process/requests/return/ReturnnList')),
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
