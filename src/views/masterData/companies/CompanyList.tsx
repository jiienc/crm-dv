import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CompanyListTable from './components/CompanyListTable'
import CompanyListActionTools from './components/CompanyListActionTools'
import CompaniesListTableTools from './components/CompaniesListTableTools'
import CompanyListSelected from './components/CompanyListSelected'

const CompanyList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Companies</h3>
              <CompanyListActionTools />
            </div>
            <CompaniesListTableTools />
            <CompanyListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <CompanyListSelected />
    </>
  )
}

export default CompanyList
