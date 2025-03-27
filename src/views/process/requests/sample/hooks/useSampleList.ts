import { apiGetSampleList } from '@/services/process-components/requests/sample/SampleService'
import useSWR from 'swr'
import { useSampleListStore } from '../store/sampleListStore'
import type { GetSampleListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useSampleList() {
  const {
    tableData,
    setTableData,
    selectedSample,
    setSelectedSample,
    setSelectAllSample,
  } = useSampleListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Sample', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetSampleList<GetSampleListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const sampleList = data?.data || []

  const sampleListTotal = data?.total || sampleList.length || 0

  return {
    sampleList,
    sampleListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedSample,
    setSelectedSample,
    setSelectAllSample,
  }
}
