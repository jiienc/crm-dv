import { apiGetOpportunitiesList } from '@/services/process-components/opportunities/OpportunitiesService'
import useSWR from 'swr'
import { useOpportunitiesListStore } from '../store/opportunitiesListStore'
import type { GetOpportunitiesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useOpportunitiesList() {
  const {
    tableData,
    setTableData,
    selectedOpportunities,
    setSelectedOpportunities,
    setSelectAllOpportunities,
  } = useOpportunitiesListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Opportunity', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetOpportunitiesList<GetOpportunitiesListResponse, TableQueries>(
        params,
      ),
    {
      revalidateOnFocus: false,
    },
  )

  const opportunitiesList = data?.data || []

  const opportunitiesListTotal = data?.total || opportunitiesList.length || 0

  return {
    opportunitiesList,
    opportunitiesListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedOpportunities,
    setSelectedOpportunities,
    setSelectAllOpportunities,
  }
}
