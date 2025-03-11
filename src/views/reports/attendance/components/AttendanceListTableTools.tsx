import useAttendanceList from '../hooks/useAttendanceList'
import AttendanceListSearch from './AttendanceListSearch'
import AttendanceTableFilter from './AttendanceListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const AttendanceListTableTools = () => {
    const { tableData, setTableData } = useAttendanceList()

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
            <AttendanceListSearch onInputChange={handleInputChange} />
            <AttendanceTableFilter />
        </div>
    )
}

export default AttendanceListTableTools
