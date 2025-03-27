import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import OpportunitiesListTable from './components/OpportunitiesListTable'
// import OpportunitiesListActionTools from './components/OpportunitiesListActionTools'
import OpportunitiesListTableTools from './components/OpportunitiesListTableTools'
import OpportunitiesListSelected from './components/OpportunitiesListSelected'

const OpportunitiesList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Opportunities</h3>
              {/* <OpportunitiesListActionTools /> */}
            </div>
            <OpportunitiesListTableTools />
            <OpportunitiesListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <OpportunitiesListSelected />
    </>
  )
}

export default OpportunitiesList
