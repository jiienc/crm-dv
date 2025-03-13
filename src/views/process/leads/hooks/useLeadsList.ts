import { apiGetLeadsList } from '@/services/process-components/leads/LeadsService'
import useSWR from 'swr'
import { useLeadsListStore } from '../store/leadsListStore'
import type { TableQueries } from '@/@types/common'

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
    async ([_, params]) => {
      try {
        return await apiGetLeadsList<TableQueries>(params)
      } catch (err) {
        console.error('Error fetching leads:', err)
        throw err
      }
    },
    {
      revalidateOnFocus: false,
    },
  )

  const leadsList = data?.data ?? []
  const leadsListTotal = leadsList.length

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
