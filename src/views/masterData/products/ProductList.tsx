import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import ProducListTableTools from './components/ProductListTableTools'
import ProductListTable from './components/ProductListTable'
import ProductListSelected from './components/ProductListSelected'

const ProductList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Products</h3>
            </div>
            <ProducListTableTools />
            <ProductListTable />
          </div>
        </AdaptiveCard>
      </Container>
      <ProductListSelected />
    </>
  )
}

export default ProductList
