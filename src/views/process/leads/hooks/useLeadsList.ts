import { apiGetLeadsList } from '@/services/process-components/leads/LeadsService'
import useSWR from 'swr'
import { useLeadsListStore } from '../store/leadsListStore'
import type { TableQueries } from '@/@types/common'
import { GetLeadsListResponse } from '../types'

export default function useLeadsList() {
  const {
    tableData,
    setTableData,
    selectedLeads,
    setSelectedLeads,
    setSelectAllLeads,
  } = useLeadsListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Lead', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
          apiGetLeadsList<GetLeadsListResponse, TableQueries>(params),
        {
          revalidateOnFocus: false,
        },
  )

  const leadsList = data?.data || []
  const leadsListTotal = data?.total || leadsList.length || 0

  return {
    leadsList,
    leadsListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedLeads,
    setSelectedLeads,
    setSelectAllLeads,
  }
}
