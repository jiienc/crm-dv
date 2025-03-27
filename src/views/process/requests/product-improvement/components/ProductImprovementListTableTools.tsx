import useProductImprovementList from '../hooks/useProductImprovementList'
import ProductImprovementListSearch from './ProductImprovementListSearch'
import cloneDeep from 'lodash/cloneDeep'

const ProductImprovementListTableTools = () => {
  const { tableData, setTableData } = useProductImprovementList()

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
      <ProductImprovementListSearch onInputChange={handleInputChange} />
    </div>
  )
}

export default ProductImprovementListTableTools
