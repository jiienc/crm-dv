import { MASTERDATA_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const masterdataNavigationConfig: NavigationTree[] = [
  {
    key: 'masterData',
    path: '',
    title: 'Master Data',
    translateKey: 'nav.masterData',
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
        key: 'masterData.companies',
        path: `${MASTERDATA_PREFIX_PATH}/companies`,
        title: 'Companies',
        translateKey: 'nav.companies',
        icon: 'company',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.companyDesc',
            label: 'Company List',
          },
        },
        subMenu: [],
      },
      {
        key: 'masterData.customers',
        path: `${MASTERDATA_PREFIX_PATH}/customers`,
        title: 'Customers',
        translateKey: 'nav.customers',
        icon: 'customer',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
            description: {
              translateKey: 'nav.customerDesc',
              label: 'Customer List',
            },
          },
        subMenu: [],
      },
      {
        key: 'masterData.products',
        path: `${MASTERDATA_PREFIX_PATH}/products`,
        title: 'Products',
        translateKey: 'nav.products',
        icon: 'product',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
            description: {
              translateKey: 'nav.productDesc',
              label: 'Product List',
            },
          },
        subMenu: [],
      },
    ],
  },
]

export default masterdataNavigationConfig
