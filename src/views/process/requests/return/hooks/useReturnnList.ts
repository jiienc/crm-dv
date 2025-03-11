import { apiGetReturnnList } from '@/services/process-components/requests/returnn/ReturnnService'
import useSWR from 'swr'
import { useReturnnListStore } from '../store/returnnListStore'
import type { GetReturnnListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useReturnnList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedReturnn,
        setSelectedReturnn,
        setSelectAllReturnn,
        setFilterData,
    } = useReturnnListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/returnn', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetReturnnList<GetReturnnListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const returnnList = data?.list || []

    const returnnListTotal = data?.total || 0

    return {
        returnnList,
        returnnListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedReturnn,
        setSelectedReturnn,
        setSelectAllReturnn,
        setFilterData,
    }
}
