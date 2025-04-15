import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import ProfileSection from './ProfileSection'
import BillingSection from './BillingSection'
import { apiGetCustomer } from '@/services/masterdata-components/customers/CustomersService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import type { Customer } from '../customers/types'
import Button from '@/components/ui/Button'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const { TabNav, TabList, TabContent } = Tabs

const CustomerDetails = () => {
  const { id } = useParams()

  const { data, isLoading } = useSWR(
    ['/resource/Customer', { id: id as string }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) => apiGetCustomer<Customer, { id: string }>(params),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      evalidateOnFocus: false,
    },
  )

  const handleBack = () => {
    history.back()
  }

  return (
    <Loading loading={isLoading}>
      {!isEmpty(data) && (
        <div className="flex flex-col gap-4">
          {/* Back Button Section */}
          <div className="flex justify-start">
            <Button
              className="rounded-lg"
              type="button"
              variant="plain"
              icon={<TbArrowNarrowLeft />}
              onClick={handleBack}
            >
              Back
            </Button>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="min-w-[330px] 2xl:min-w-[400px]">
              <ProfileSection data={data} />
            </div>
            <Card className="w-full">
              <Tabs defaultValue="billing">
                <TabList>
                  <TabNav value="billing">Billing</TabNav>
                </TabList>
                <div className="p-4">
                  <TabContent value="billing">
                    <BillingSection data={data} />
                  </TabContent>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      )}
    </Loading>
  )
}

export default CustomerDetails
