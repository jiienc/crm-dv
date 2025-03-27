import { apiGetProductImprovementList } from '@/services/process-components/requests/productimprovement/ProductImprovementService'
import useSWR from 'swr'
import { useProductImprovementListStore } from '../store/productimprovementListStore'
import type { GetProductImprovementListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProductImprovementList() {
    const {
        tableData,
        setTableData,
        selectedProductImprovement,
        setSelectedProductImprovement,
        setSelectAllProductImprovement,
    } = useProductImprovementListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/resource/ProductImprovement', { ...tableData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProductImprovementList<GetProductImprovementListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const productimprovementList = data?.data || []

    const productimprovementListTotal = data?.total || productimprovementList.length || 0

    return {
        productimprovementList,
        productimprovementListTotal,
        error,
        isLoading,
        tableData,
        mutate,
        setTableData,
        selectedProductImprovement,
        setSelectedProductImprovement,
        setSelectAllProductImprovement,
    }
}
