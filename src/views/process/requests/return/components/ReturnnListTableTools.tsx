import useReturnnList from '../hooks/useReturnnList'
import ReturnnListSearch from './ReturnnListSearch'
import ReturnnTableFilter from './ReturnnListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ReturnnListTableTools = () => {
    const { tableData, setTableData } = useReturnnList()

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
            <ReturnnListSearch onInputChange={handleInputChange} />
            <ReturnnTableFilter />
        </div>
    )
}

export default ReturnnListTableTools
