import { apiGetLeadsList } from '@/services/process-components/leads/LeadsService'
import useSWR from 'swr'
import { useLeadsListStore } from '../store/leadsListStore'
import type { GetLeadsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useLeadsList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedLeads,
        setSelectedLeads,
        setSelectAllLeads,
        setFilterData,
    } = useLeadsListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/leads', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetLeadsList<GetLeadsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const leadsList = data?.list || []

    const leadsListTotal = data?.total || 0

    return {
        leadsList,
        leadsListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedLeads,
        setSelectedLeads,
        setSelectAllLeads,
        setFilterData,
    }
}
