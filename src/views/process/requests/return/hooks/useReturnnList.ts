import { apiGetReturnnList } from '@/services/process-components/requests/returnn/ReturnnService'
import useSWR from 'swr'
import { useReturnnListStore } from '../store/returnnListStore'
import type { GetReturnnListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useReturnnList() {
  const {
    tableData,
    setTableData,
    selectedReturnn,
    setSelectedReturnn,
    setSelectAllReturnn,
  } = useReturnnListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Return', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetReturnnList<GetReturnnListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const returnnList = data?.data || []

  const returnnListTotal = data?.total || returnnList.length || 0

  return {
    returnnList,
    returnnListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedReturnn,
    setSelectedReturnn,
    setSelectAllReturnn,
  }
}
