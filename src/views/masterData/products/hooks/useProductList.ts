import { apiGetProductList } from '@/services/masterdata-components/products/ProductService'
import useSWR from 'swr'
import { useProductListStore } from '../store/productListStore'
import type { GetProductListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

const useProductList = () => {
  const {
    tableData,
    setTableData,
    selectedProduct,
    setSelectedProduct,
    setSelectAllProduct,
  } = useProductListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Item', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetProductList<GetProductListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )
  
  const productList = data?.data || []
  const productListTotal = data?.total || productList.length || 0

  return {
    error,
    isLoading,         
    tableData,
    mutate,
    productList,
    productListTotal,
    setTableData,
    selectedProduct,
    setSelectedProduct,
    setSelectAllProduct,
  }
}

export default useProductList
