import { apiGetNewProductList } from '@/services/process-components/requests/newproduct/NewProductService'
import useSWR from 'swr'
import { useNewProductListStore } from '../store/newproductListStore'
import type { GetNewProductListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useNewProductList() {
  const {
    tableData,
    setTableData,
    selectedNewProduct,
    setSelectedNewProduct,
    setSelectAllNewProduct,
  } = useNewProductListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/NewProduct', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetNewProductList<GetNewProductListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const newproductList = data?.data || []

  const newproductListTotal = data?.total || newproductList.length || 0

  return {
    newproductList,
    newproductListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedNewProduct,
    setSelectedNewProduct,
    setSelectAllNewProduct,
  }
}
