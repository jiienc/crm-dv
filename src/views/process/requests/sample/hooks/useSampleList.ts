import { apiGetSampleList } from '@/services/process-components/requests/sample/SampleService'
import useSWR from 'swr'
import { useSampleListStore } from '../store/sampleListStore'
import type { GetSampleListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useSampleList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedSample,
        setSelectedSample,
        setSelectAllSample,
        setFilterData,
    } = useSampleListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/sample', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetSampleList<GetSampleListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const sampleList = data?.list || []

    const sampleListTotal = data?.total || 0

    return {
        sampleList,
        sampleListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedSample,
        setSelectedSample,
        setSelectAllSample,
        setFilterData,
    }
}
