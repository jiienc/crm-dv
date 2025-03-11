import { apiGetNewProductList } from '@/services/process-components/requests/newproduct/NewProductService'
import useSWR from 'swr'
import { useNewProductListStore } from '../store/newproductListStore'
import type { GetNewProductListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useNewProductList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedNewProduct,
        setSelectedNewProduct,
        setSelectAllNewProduct,
        setFilterData,
    } = useNewProductListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/newproduct', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetNewProductList<GetNewProductListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const newproductList = data?.list || []

    const newproductListTotal = data?.total || 0

    return {
        newproductList,
        newproductListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedNewProduct,
        setSelectedNewProduct,
        setSelectAllNewProduct,
        setFilterData,
    }
}
