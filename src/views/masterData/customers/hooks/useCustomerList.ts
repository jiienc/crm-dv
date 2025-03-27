import { apiGetCustomerList } from '@/services/masterdata-components/customers/CustomersService'
import useSWR from 'swr'
import { useCustomerListStore } from '../store/customerListStore'
import type { TableQueries } from '@/@types/common'
import { GetCustomerListResponse } from '../types'

const useCustomerList = () => {
  const {
    tableData,
    setTableData,
    selectedCustomer,
    setSelectedCustomer,
    setSelectAllCustomer,
  } = useCustomerListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Customer', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
          apiGetCustomerList<GetCustomerListResponse, TableQueries>(params),
        {
          revalidateOnFocus: false,
        },
  )

  const customerList = data?.data || []
  const customerListTotal = data?.total || customerList.length || 0

  return {
    error,
    isLoading,
    tableData,
    mutate,
    customerList,
    customerListTotal,
    setTableData,
    selectedCustomer,
    setSelectedCustomer,
    setSelectAllCustomer,
  }
}

export default useCustomerList