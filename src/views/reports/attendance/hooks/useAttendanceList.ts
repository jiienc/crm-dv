import { apiGetAttendanceList } from '@/services/reports-components/attendance/AttendanceService'
import useSWR from 'swr'
import { useAttendanceListStore } from '../store/attendanceListStore'
import type { GetAttendanceListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useAttendanceList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedAttendance,
        setSelectedAttendance,
        setSelectAllAttendance,
        setFilterData,
    } = useAttendanceListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/attendance', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetAttendanceList<GetAttendanceListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const attendanceList = data?.list || []

    const attendanceListTotal = data?.total || 0

    return {
        attendanceList,
        attendanceListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedAttendance,
        setSelectedAttendance,
        setSelectAllAttendance,
        setFilterData,
    }
}
