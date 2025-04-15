import { mock } from '../MockAdapter'
import { eCommerceData } from '../data/dashboardData'

mock.onGet(`/mock/dashboard/ecommerce`).reply(() => {
  return [200, eCommerceData]
})
