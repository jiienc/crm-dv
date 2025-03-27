import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Opportunities } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type OpportunitiesListState = {
  tableData: TableQueries
  selectedOpportunities: Partial<Opportunities>[]
}

type OpportunitiesListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedOpportunities: (
    checked: boolean,
    opportunities: Opportunities,
  ) => void
  setSelectAllOpportunities: (opportunities: Opportunities[]) => void
}

const initialState: OpportunitiesListState = {
  tableData: initialTableData,
  selectedOpportunities: [],
}

export const useOpportunitiesListStore = create<
  OpportunitiesListState & OpportunitiesListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedOpportunities: (checked, row) =>
    set((state) => {
      const prevData = state.selectedOpportunities
      if (checked) {
        return { selectedOppurtunities: [...prevData, ...[row]] }
      } else {
        if (
          prevData.some(
            (prevOpportunities) => row.name === prevOpportunities.name,
          )
        ) {
          return {
            selectedOppurtunities: prevData.filter(
              (prevOpportunities) => prevOpportunities.name !== row.name,
            ),
          }
        }
        return { selectedOpportunities: prevData }
      }
    }),
  setSelectAllOpportunities: (row) =>
    set(() => ({ selectedOpportunities: row })),
}))
