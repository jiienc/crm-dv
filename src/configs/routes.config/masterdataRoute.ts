import { lazy } from 'react'
import { MASTERDATA_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const masterdataRoute: Routes = [
    {
        key: 'masterData.companies',
        path: `${MASTERDATA_PREFIX_PATH}/companies`,
        component: lazy(() => import('@/views/masterData/companies/CompanyList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'masterData.customers',
        path: `${MASTERDATA_PREFIX_PATH}/customers`,
        component: lazy(() => import('@/views/masterData/customers/CustomerList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'masterData.products',
        path: `${MASTERDATA_PREFIX_PATH}/products`,
        component: lazy(() => import('@/views/masterData/products/ProductList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default masterdataRoute
