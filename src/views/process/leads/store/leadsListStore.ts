import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Leads, Filter } from '../types'

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

export type LeadsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedLeads: Partial<Leads>[]
}

type LeadsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedLeads: (checked: boolean, leads: Leads) => void
    setSelectAllLeads: (leads: Leads[]) => void
}

const initialState: LeadsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedLeads: [],
}

export const useLeadsListStore = create<
    LeadsListState & LeadsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedLeads: (checked, row) =>
        set((state) => {
            const prevData = state.selectedLeads
            if (checked) {
                return { selectedLeads: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevLeads) => row.id === prevLeads.id)
                ) {
                    return {
                        selectedLeads: prevData.filter(
                            (prevLeads) => prevLeads.id !== row.id,
                        ),
                    }
                }
                return { selectedLeads: prevData }
            }
        }),
    setSelectAllLeads: (row) => set(() => ({ selectedLeads: row })),
}))
