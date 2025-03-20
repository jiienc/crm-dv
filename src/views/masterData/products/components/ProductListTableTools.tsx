import ProductListSearch from './ProductListSearch'
import useProductList from '../hooks/useProductList'
import cloneDeep from 'lodash/cloneDeep'

const ProductListTableTools = () => {
  const { tableData, setTableData } = useProductList()

  const handleInputChange = (val: string) => {
    const newTableData = cloneDeep(tableData)
    newTableData.query = val
    newTableData.pageIndex = 1
    if (typeof val === 'string' && val.length > 1) {
      setTableData(newTableData)
    }

    if (typeof val === 'string' && val.length === 0) {
      setTableData(newTableData)
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <ProductListSearch onInputChange={handleInputChange} />
    </div>
  )
}

export default ProductListTableTools
