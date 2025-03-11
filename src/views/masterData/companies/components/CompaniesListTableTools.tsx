import useCompanyList from '../hooks/useCompanyList'
import CompanyListSearch from './CompanyListSearch'
import CompanyTableFilter from './CompanyListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CompaniesListTableTools = () => {
    const { tableData, setTableData } = useCompanyList()

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
            <CompanyListSearch onInputChange={handleInputChange} />
            <CompanyTableFilter />
        </div>
    )
}

export default CompaniesListTableTools
