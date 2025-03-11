import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Quotation, Filter } from '../types'

export const initialTableData: TableQueries = {
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData = {
    purchasedProducts: '',
    purchaseChannel: [
        'Retail Stores',
        'Online Retailers',
        'Resellers',
        'Mobile Apps',
        'Direct Sales',
    ],
}

export type QuotationListState = {
    tableData: TableQueries
    filterData: Filter
    selectedQuotation: Partial<Quotation>[]
}

type QuotationListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedQuotation: (checked: boolean, quotation: Quotation) => void
    setSelectAllQuotation: (quotation: Quotation[]) => void
}

const initialState: QuotationListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedQuotation: [],
}

export const useQuotationListStore = create<
    QuotationListState & QuotationListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedQuotation: (checked, row) =>
        set((state) => {
            const prevData = state.selectedQuotation
            if (checked) {
                return { selectedQuotation: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevQuotation) => row.id === prevQuotation.id)
                ) {
                    return {
                        selectedQuotation: prevData.filter(
                            (prevQuotation) => prevQuotation.id !== row.id,
                        ),
                    }
                }
                return { selectedQuotation: prevData }
            }
        }),
    setSelectAllQuotation: (row) => set(() => ({ selectedQuotation: row })),
}))
