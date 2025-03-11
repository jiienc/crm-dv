import { PROCESS_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const processNavigationConfig: NavigationTree[] = [
  {
    key: 'process',
    path: '',
    title: 'Process',
    translateKey: 'nav.process',
    icon: 'groupMenu',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
      {
        key: 'process.leads',
        path: `${PROCESS_PREFIX_PATH}/leads`,
        title: 'Leads',
        translateKey: 'nav.leads',
        icon: 'leads',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.leadsDesc',
            label: 'Leads List',
          },
        },
        subMenu: [],
      },
      {
        key: 'process.events',
        path: `${PROCESS_PREFIX_PATH}/events`,
        title: 'Events',
        translateKey: 'nav.events',
        icon: 'events',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.eventsDesc',
            label: 'Events List',
          },
        },
        subMenu: [],
      },
      {
        key: 'process.oppurtunities',
        path: `${PROCESS_PREFIX_PATH}/oppurtunities`,
        title: 'Oppurtunities',
        translateKey: 'nav.oppurtunities',
        icon: 'oppurtunities',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.eventsDesc',
            label: 'Events List',
          },
        },
        subMenu: [],
      },
      {
        key: 'process.tickets',
        path: `${PROCESS_PREFIX_PATH}/tickets`,
        title: 'Tickets',
        translateKey: 'nav.tickets',
        icon: 'tickets',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.eventsDesc',
            label: 'Events List',
          },
        },
        subMenu: [],
      },
      {
        key: 'process.requests',
        path: '',
        title: 'Requests',
        translateKey: 'nav.processRequests.requests',
        icon: 'requests',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.processRequests.requestsDesc',
            label: 'Requests Section',
          },
        },
        subMenu: [
          {
            key: 'process.requests.sample',
            path: `${PROCESS_PREFIX_PATH}/requests/sample`,
            title: 'Sample',
            translateKey: 'nav.processRequests.sample',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.processRequests.sampleDesc',
                label: 'Sample Requests List',
              },
            },
            subMenu: [],
          },
          {
            key: 'process.requests.productImprovement',
            path: `${PROCESS_PREFIX_PATH}/requests/product-improvement`,
            title: 'Product Improvement',
            translateKey: 'nav.processRequests.productImprovement',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.processRequests.productImprovementDesc',
                label: 'Product Improvement Requests List',
              },
            },
            subMenu: [],
          },
          {
            key: 'process.requests.newProduct',
            path: `${PROCESS_PREFIX_PATH}/requests/new-product`,
            title: 'New Product',
            translateKey: 'nav.processRequests.newProduct',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.processRequests.newProductDesc',
                label: 'New Product Requests List',
              },
            },
            subMenu: [],
          },
          {
            key: 'process.requests.return',
            path: `${PROCESS_PREFIX_PATH}/requests/return`,
            title: 'Return',
            translateKey: 'nav.processRequests.return',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.processRequests.returnDesc',
                label: 'Return Requests List',
              },
            },
            subMenu: [],
          },
        ],
      },
      {
        key: 'process.quotation',
        path: `${PROCESS_PREFIX_PATH}/quotation`,
        title: 'Quotation',
        translateKey: 'nav.quotation',
        icon: 'quotes',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.quotationDesc',
            label: 'Quotation List',
          },
        },
        subMenu: [],
      },
    ],
  },
]

export default processNavigationConfig
