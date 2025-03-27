import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Returnn } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type ReturnnListState = {
  tableData: TableQueries
  selectedReturnn: Partial<Returnn>[]
}

type ReturnnListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedReturnn: (checked: boolean, returnn: Returnn) => void
  setSelectAllReturnn: (returnn: Returnn[]) => void
}

const initialState: ReturnnListState = {
  tableData: initialTableData,
  selectedReturnn: [],
}

export const useReturnnListStore = create<ReturnnListState & ReturnnListAction>(
  (set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedReturnn: (checked, row) =>
      set((state) => {
        const prevData = state.selectedReturnn
        if (checked) {
          return { selectedReturnn: [...prevData, ...[row]] }
        } else {
          if (prevData.some((prevReturnn) => row.name === prevReturnn.name)) {
            return {
              selectedReturnn: prevData.filter(
                (prevReturnn) => prevReturnn.name !== row.name,
              ),
            }
          }
          return { selectedReturnn: prevData }
        }
      }),
    setSelectAllReturnn: (row) => set(() => ({ selectedReturnn: row })),
  }),
)
