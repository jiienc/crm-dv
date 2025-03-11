import useLeadsList from '../hooks/useLeadsList'
import LeadsListSearch from './LeadsListSearch'
import LeadsTableFilter from './LeadsListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const LeadsListTableTools = () => {
    const { tableData, setTableData } = useLeadsList()

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
            <LeadsListSearch onInputChange={handleInputChange} />
            <LeadsTableFilter />
        </div>
    )
}

export default LeadsListTableTools
