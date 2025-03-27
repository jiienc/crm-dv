import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Quotation } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type QuotationListState = {
  tableData: TableQueries
  selectedQuotation: Partial<Quotation>[]
}

type QuotationListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedQuotation: (checked: boolean, quotation: Quotation) => void
  setSelectAllQuotation: (quotation: Quotation[]) => void
}

const initialState: QuotationListState = {
  tableData: initialTableData,
  selectedQuotation: [],
}

export const useQuotationListStore = create<
  QuotationListState & QuotationListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedQuotation: (checked, row) =>
    set((state) => {
      const prevData = state.selectedQuotation
      if (checked) {
        return { selectedQuotation: [...prevData, ...[row]] }
      } else {
        if (prevData.some((prevQuotation) => row.name === prevQuotation.name)) {
          return {
            selectedQuotation: prevData.filter(
              (prevQuotation) => prevQuotation.name !== row.name,
            ),
          }
        }
        return { selectedQuotation: prevData }
      }
    }),
  setSelectAllQuotation: (row) => set(() => ({ selectedQuotation: row })),
}))
