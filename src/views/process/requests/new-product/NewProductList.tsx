import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import NewProductListTable from './components/NewProductListTable'
import NewProductListActionTools from './components/NewProductListActionTools'
import NewProductListTableTools from './components/NewProducListTableTools'
import NewProductListSelected from './components/NewProductListSelected'

const NewProductList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>NewProduct</h3>
              <NewProductListActionTools />
            </div>
            <NewProductListTableTools />
            <NewProductListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <NewProductListSelected />
    </>
  )
}

export default NewProductList
