import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AttendanceListTable from './components/ProductMarginListTable'
import ProductMarginListActionTools from './components/ProductMarginListActionTools'

const ProductMarginList = () => {
  return (
    <>
      <Container>
        <AdaptiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3>Product Margin</h3>
              <ProductMarginListActionTools />
            </div>
            <AttendanceListTable />
          </div>
        </AdaptiveCard>
      </Container>
    </>
  )
}

export default ProductMarginList