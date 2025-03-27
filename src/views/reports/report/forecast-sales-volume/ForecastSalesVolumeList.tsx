import { useState } from 'react'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ForecastSalesVolumeListActionTools from './components/ForecastSalesVolumeListActionTools'
import ForecastSalesVolumeContent from './components/ForecastSalesVolumeContent'

const ForecastSalesVolumeList = () => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())

  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Forecast Sales Volume</h3>
              <ForecastSalesVolumeListActionTools setSelectedMonth={setSelectedMonth} />
            </div>
            <ForecastSalesVolumeContent selectedMonth={selectedMonth} />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default ForecastSalesVolumeList

