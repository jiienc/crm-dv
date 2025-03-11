import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Tickets, Filter } from '../types'

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

export type TicketsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedTickets: Partial<Tickets>[]
}

type TicketsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedTickets: (checked: boolean, tickets: Tickets) => void
    setSelectAllTickets: (tickets: Tickets[]) => void
}

const initialState: TicketsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedTickets: [],
}

export const useTicketsListStore = create<
    TicketsListState & TicketsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedTickets: (checked, row) =>
        set((state) => {
            const prevData = state.selectedTickets
            if (checked) {
                return { selectedTickets: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevTickets) => row.id === prevTickets.id)
                ) {
                    return {
                        selectedTickets: prevData.filter(
                            (prevTickets) => prevTickets.id !== row.id,
                        ),
                    }
                }
                return { selectedTickets: prevData }
            }
        }),
    setSelectAllTickets: (row) => set(() => ({ selectedTickets: row })),
}))
