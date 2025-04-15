import Loading from '@/components/shared/Loading'
import SalesOverview from './components/SalesOverview'
import ProjectStatistic from './components/ProjectStatistic'
import Welcome from './components/Welcome'
import Ticketing from './components/Ticketing'
import MeetingSchedules from './components/MeetingSchedules'
import Leads from './components/Leads'
import Projects from './components/Projects'
import { apiGetEcommerceDashboard } from '@/services/DashboardService'
import useSWR from 'swr'
import type { GetEcommerceDashboardResponse } from './types'
import Card from '@/components/ui/Card'
import TopProduct from './components/TopProduct'
import Request from './components/Request'

const SalesDashboard = () => {
  const { data, isLoading } = useSWR(
    ['/mock/dashboard/ecommerce'],
    () => apiGetEcommerceDashboard<GetEcommerceDashboardResponse>(),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    },
  )

  return (
    <Loading loading={isLoading}>
      {data && (
        <div>
          <div className="flex flex-col gap-4 max-w-full overflow-x-hidden">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="flex flex-col gap-4 flex-1 xl:col-span-3">
                <SalesOverview data={data.salesOverview} />
                <div className="flex flex-col xl:flex-row gap-4">
                  <Card className="flex-1 w-full xl:w-1/2">
                    <Leads data={data.leads}/>
                  </Card>
                  <Card className="flex-1 w-full xl:w-1/2">
                    <Projects data={data.projects}/>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col gap-4 2xl:min-w-[360px]">
                <Welcome />
                <Ticketing data={data.ticketing} />
                <MeetingSchedules data={data.meetingSchedules} />
              </div>
            </div>
            <ProjectStatistic />
            <Request />
            <TopProduct />
          </div>
        </div>
      )}
    </Loading>
  )
}

export default SalesDashboard
