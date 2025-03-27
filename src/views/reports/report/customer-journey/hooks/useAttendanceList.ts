import { apiGetAttendanceList } from '@/services/reports-components/attendance/AttendanceService'
import useSWR from 'swr'
import { useAttendanceListStore } from '../store/attendanceListStore'
import type { GetAttendanceListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useAttendanceList() {
  const {
    tableData,
    setTableData,
    selectedAttendance,
    setSelectedAttendance,
    setSelectAllAttendance,
  } = useAttendanceListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/api/attendance', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetAttendanceList<GetAttendanceListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const attendanceList = data?.data || []

  const attendanceListTotal = data?.total || attendanceList.length || 0

  return {
    attendanceList,
    attendanceListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedAttendance,
    setSelectedAttendance,
    setSelectAllAttendance,
  }
}
