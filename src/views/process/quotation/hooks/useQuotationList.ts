import { apiGetQuotationList } from '@/services/process-components/quotation/QuotationService'
import useSWR from 'swr'
import { useQuotationListStore } from '../store/quotationListStore'
import type { GetQuotationListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useQuotationList() {
  const {
    tableData,
    setTableData,
    selectedQuotation,
    setSelectedQuotation,
    setSelectAllQuotation,
  } = useQuotationListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/api/quotation', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetQuotationList<GetQuotationListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const quotationList = data?.data || []

  const quotationListTotal = data?.total || quotationList.length || 0

  return {
    quotationList,
    quotationListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedQuotation,
    setSelectedQuotation,
    setSelectAllQuotation,
  }
}
