import useQuotationList from '../hooks/useQuotationList'
import QuotationListSearch from './QuotationListSearch'
import QuotationTableFilter from './QuotationListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const QuotationListTableTools = () => {
    const { tableData, setTableData } = useQuotationList()

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
            <QuotationListSearch onInputChange={handleInputChange} />
            <QuotationTableFilter />
        </div>
    )
}

export default QuotationListTableTools
