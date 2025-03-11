import useOppurtunitiesList from '../hooks/useOppurtunitiesList'
import OppurtunitiesListSearch from './OppurtunitiesListSearch'
import OppurtunitiesTableFilter from './OppurtunitiesListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const OppurtunitiesListTableTools = () => {
    const { tableData, setTableData } = useOppurtunitiesList()

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
            <OppurtunitiesListSearch onInputChange={handleInputChange} />
            <OppurtunitiesTableFilter />
        </div>
    )
}

export default OppurtunitiesListTableTools
