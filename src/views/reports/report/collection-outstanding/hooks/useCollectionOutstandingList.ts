import { apiGetAttendanceList } from '@/services/reports-components/attendance/AttendanceService'
import useSWR from 'swr'
import { useCollectionOutstandingListStore } from '../store/collectionOutstandingListStore'
import type { GetCollectionOutstandingListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCollectionOutstandingList() {
  const {
    tableData,
    setTableData,
    selectedCollectionOutstanding,
    setSelectedCollectionOutstanding,
    setSelectAllCollectionOutstanding,
  } = useCollectionOutstandingListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/api/attendance', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetAttendanceList<GetCollectionOutstandingListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const collectionOutstandingList = data?.data || []

  const collectionOutstandingListTotal = data?.total || collectionOutstandingList.length || 0

  return {
    collectionOutstandingList,
    collectionOutstandingListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedCollectionOutstanding,
    setSelectedCollectionOutstanding,
    setSelectAllCollectionOutstanding,
  }
}
