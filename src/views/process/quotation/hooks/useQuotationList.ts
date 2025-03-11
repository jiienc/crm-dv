import { apiGetQuotationList } from '@/services/process-components/quotation/QuotationService'
import useSWR from 'swr'
import { useQuotationListStore } from '../store/quotationListStore'
import type { GetQuotationListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useQuotationList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedQuotation,
        setSelectedQuotation,
        setSelectAllQuotation,
        setFilterData,
    } = useQuotationListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/quotation', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetQuotationList<GetQuotationListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const quotationList = data?.list || []

    const quotationListTotal = data?.total || 0

    return {
        quotationList,
        quotationListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedQuotation,
        setSelectedQuotation,
        setSelectAllQuotation,
        setFilterData,
    }
}
