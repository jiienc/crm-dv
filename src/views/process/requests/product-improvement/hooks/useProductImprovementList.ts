import { apiGetProductImprovementList } from '@/services/process-components/requests/productimprovement/ProductImprovementService'
import useSWR from 'swr'
import { useProductImprovementListStore } from '../store/productimprovementListStore'
import type { GetProductImprovementListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProductImprovementList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedProductImprovement,
        setSelectedProductImprovement,
        setSelectAllProductImprovement,
        setFilterData,
    } = useProductImprovementListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/productimprovement', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProductImprovementList<GetProductImprovementListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const productimprovementList = data?.list || []

    const productimprovementListTotal = data?.total || 0

    return {
        productimprovementList,
        productimprovementListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedProductImprovement,
        setSelectedProductImprovement,
        setSelectAllProductImprovement,
        setFilterData,
    }
}
