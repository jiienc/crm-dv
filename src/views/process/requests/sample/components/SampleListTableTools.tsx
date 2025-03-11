import useSampleList from '../hooks/useSampleList'
import SampleListSearch from './SampleListSearch'
import SampleTableFilter from './SampleListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const SampleListTableTools = () => {
    const { tableData, setTableData } = useSampleList()

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
            <SampleListSearch onInputChange={handleInputChange} />
            <SampleTableFilter />
        </div>
    )
}

export default SampleListTableTools
