import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Tickets } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type TicketsListState = {
  tableData: TableQueries
  selectedTickets: Partial<Tickets>[]
}

type TicketsListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedTickets: (checked: boolean, tickets: Tickets) => void
  setSelectAllTickets: (tickets: Tickets[]) => void
}

const initialState: TicketsListState = {
  tableData: initialTableData,
  selectedTickets: [],
}

export const useTicketsListStore = create<TicketsListState & TicketsListAction>(
  (set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedTickets: (checked, row) =>
      set((state) => {
        const prevData = state.selectedTickets
        if (checked) {
          return { selectedTickets: [...prevData, ...[row]] }
        } else {
          if (prevData.some((prevTickets) => row.name === prevTickets.name)) {
            return {
              selectedTickets: prevData.filter(
                (prevTickets) => prevTickets.name !== row.name,
              ),
            }
          }
          return { selectedTickets: prevData }
        }
      }),
    setSelectAllTickets: (row) => set(() => ({ selectedTickets: row })),
  }),
)
