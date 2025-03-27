import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ProductImprovementListTable from './components/ProductImprovementListTable'
import ProductImprovementListActionTools from './components/ProductImprovementListActionTools'
import ProductImprovementListTableTools from './components/ProductImprovementListTableTools'
import ProductImprovementListSelected from './components/ProductImprovementListSelected'

const ProductImprovementList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>ProductImprovement</h3>
              <ProductImprovementListActionTools />
            </div>
            <ProductImprovementListTableTools />
            <ProductImprovementListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <ProductImprovementListSelected />
    </>
  )
}

export default ProductImprovementList
