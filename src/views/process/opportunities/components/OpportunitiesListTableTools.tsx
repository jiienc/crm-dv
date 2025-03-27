import useOpportunitiesList from '../hooks/useOpportunitiesList'
import OpportunitiesListSearch from './OpportunitiesListSearch'
import cloneDeep from 'lodash/cloneDeep'

const OpportunitiesListTableTools = () => {
  const { tableData, setTableData } = useOpportunitiesList()

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
      <OpportunitiesListSearch onInputChange={handleInputChange} />
    </div>
  )
}

export default OpportunitiesListTableTools
