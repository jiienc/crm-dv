import { apiGetOppurtunitiesList } from '@/services/process-components/oppurtunities/OppurtunitiesService'
import useSWR from 'swr'
import { useOppurtunitiesListStore } from '../store/oppurtunitiesListStore'
import type { GetOppurtunitiesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useOppurtunitiesList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedOppurtunities,
        setSelectedOppurtunities,
        setSelectAllOppurtunities,
        setFilterData,
    } = useOppurtunitiesListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/oppurtunities', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetOppurtunitiesList<GetOppurtunitiesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const oppurtunitiesList = data?.list || []

    const oppurtunitiesListTotal = data?.total || 0

    return {
        oppurtunitiesList,
        oppurtunitiesListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedOppurtunities,
        setSelectedOppurtunities,
        setSelectAllOppurtunities,
        setFilterData,
    }
}
