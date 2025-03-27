import Tabs from '@/components/ui/Tabs'
import {
  AiOutlineDollarCircle,
  AiOutlineBulb,
  AiOutlineUserSwitch,
  AiOutlineBarChart,
  AiOutlineReconciliation,
  AiOutlineFund,
} from 'react-icons/ai'
import CollectionOutstandingList from './collection-outstanding/CollectionOutstandingList'
import SuggestionList from './suggestion/SuggestionList'
import CustomerJourneyList from './customer-journey/CustomerJourneyList'
import ForecastSalesVolumeList from './forecast-sales-volume/ForecastSalesVolumeList'
import SplList from './spl/SplList'
import SbuList from './sbu/SbuList'
import ProductMarginList from './product-margin/ProductMarginList'

const { TabNav, TabList, TabContent } = Tabs

const Icons = () => {
  return (
    <div>
      <Tabs defaultValue="collection-outstanding">
        <TabList>
          <TabNav value="collection-outstanding" icon={<AiOutlineDollarCircle />}>
            Collection Outstanding
          </TabNav>
          <TabNav value="suggestion" icon={<AiOutlineBulb />}>
            Suggestion
          </TabNav>
          <TabNav value="customer-journey" icon={<AiOutlineUserSwitch />}>
            Customer Journey
          </TabNav>
          <TabNav value="forecast-sales-volume" icon={<AiOutlineBarChart />}>
            Forecast Sales Volume
          </TabNav>
          <TabNav value="spl" icon={<AiOutlineReconciliation />}>
            SPL Monthly
          </TabNav>
          <TabNav value="sbu" icon={<AiOutlineReconciliation />}>
            SBU Monthly
          </TabNav>
          <TabNav value="product-margin" icon={<AiOutlineFund />}>
            Product Margin
          </TabNav>
        </TabList>
        <div className="p-4">
          <TabContent value="collection-outstanding">
            <CollectionOutstandingList />
          </TabContent>
          <TabContent value="suggestion">
            <SuggestionList />
          </TabContent>
          <TabContent value="customer-journey">
            <CustomerJourneyList />
          </TabContent>
          <TabContent value="forecast-sales-volume">
            <ForecastSalesVolumeList />
          </TabContent>
          <TabContent value="spl">
            <SplList />
          </TabContent>
          <TabContent value="sbu">
            <SbuList />
          </TabContent>
          <TabContent value="product-margin">
            <ProductMarginList />
          </TabContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Icons
