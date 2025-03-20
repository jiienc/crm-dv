import { apiGetCustomerList } from '@/services/masterdata-components/customers/CustomersService'
import useSWR from 'swr'
import { useCustomerListStore } from '../store/customerListStore'
import type { TableQueries } from '@/@types/common'

export default function useCustomerList() {
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
    async ([_, params]) => {
      try {
        return await apiGetCustomerList<TableQueries>(params)
      } catch (err) {
        console.error('Error fetching leads:', err)
        throw err
      }
    },
    {
      revalidateOnFocus: false,
    },
  )

  const customerList = data?.data ?? []
  const customerListTotal = customerList.length

  return {
    customerList,
    customerListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedCustomer,
    setSelectedCustomer,
    setSelectAllCustomer,
  }
}
