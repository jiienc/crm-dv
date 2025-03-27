import { useState } from 'react'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import SplListActionTools from './components/SplListActionTools'
import SplTable1 from './components/SplTable1'
import SplTable2 from './components/SplTable2'

const SplList = () => {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())

  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>SPL Summary</h3>
              <SplListActionTools setSelectedMonth={setSelectedMonth} />
            </div>
            <SplTable1 selectedMonth={selectedMonth} />
            <SplTable2 selectedMonth={selectedMonth} />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default SplList
