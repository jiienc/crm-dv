import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Leads } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type LeadsListState = {
  tableData: TableQueries
  selectedLeads: Partial<Leads>[]
}

type LeadsListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedLeads: (checked: boolean, leads: Leads) => void
  setSelectAllLeads: (leads: Leads[]) => void
}

const initialState: LeadsListState = {
  tableData: initialTableData,
  selectedLeads: [],
}

export const useLeadsListStore = create<LeadsListState & LeadsListAction>(
  (set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedLeads: (checked, row) =>
      set((state) => {
        const prevData = state.selectedLeads
        if (checked) {
          return { selectedLeads: [...prevData, ...[row]] }
        } else {
          if (prevData.some((prevLeads) => row.name === prevLeads.name)) {
            return {
              selectedLeads: prevData.filter(
                (prevLeads) => prevLeads.name !== row.name,
              ),
            }
          }
          return { selectedLeads: prevData }
        }
      }),
    setSelectAllLeads: (row) => set(() => ({ selectedLeads: row })),
  }),
)
