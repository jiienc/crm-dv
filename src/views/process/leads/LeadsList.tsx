import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import LeadsListTable from './components/LeadsListTable'
import LeadsListActionTools from './components/LeadsListActionTools'
import LeadsListTableTools from './components/LeadsListTableTools'
import LeadsListSelected from './components/LeadsListSelected'

const LeadsList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Leads</h3>
              <LeadsListActionTools />
            </div>
            <LeadsListTableTools />
            <LeadsListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <LeadsListSelected />
    </>
  )
}

export default LeadsList
