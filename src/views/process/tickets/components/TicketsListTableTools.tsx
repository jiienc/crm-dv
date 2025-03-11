import useTicketsList from '../hooks/useTicketsList'
import TicketsListSearch from './TicketsListSearch'
import TicketsTableFilter from './TicketsListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const TicketsListTableTools = () => {
    const { tableData, setTableData } = useTicketsList()

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
            <TicketsListSearch onInputChange={handleInputChange} />
            <TicketsTableFilter />
        </div>
    )
}

export default TicketsListTableTools
