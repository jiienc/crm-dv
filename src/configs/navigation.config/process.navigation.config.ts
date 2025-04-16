import { PROCESS_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
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
        key: 'process.opportunities',
        path: `${PROCESS_PREFIX_PATH}/opportunities`,
        title: 'Oppurtunities',
        translateKey: 'nav.opportunities',
        icon: 'opportunities',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.opportunitiesDesc',
            label: 'Opportunities List',
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
            translateKey: 'nav.ticketsDesc',
            label: 'Tickets List',
          },
        },
        subMenu: [],
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
