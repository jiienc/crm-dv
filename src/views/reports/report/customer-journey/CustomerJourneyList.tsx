import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerJourneyListActionTools from './components/CustomerJourneyListActionTools'
import CustomerJourneyContent from './components/CustomerJourneyContent'

const CustomerJourneyList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Customer Journey</h3>
              <CustomerJourneyListActionTools />
            </div>
            <CustomerJourneyContent />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default CustomerJourneyList
