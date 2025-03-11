import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Oppurtunities, Filter } from '../types'

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

export type OppurtunitiesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedOppurtunities: Partial<Oppurtunities>[]
}

type OppurtunitiesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedOppurtunities: (checked: boolean, oppurtunities: Oppurtunities) => void
    setSelectAllOppurtunities: (oppurtunities: Oppurtunities[]) => void
}

const initialState: OppurtunitiesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedOppurtunities: [],
}

export const useOppurtunitiesListStore = create<
    OppurtunitiesListState & OppurtunitiesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedOppurtunities: (checked, row) =>
        set((state) => {
            const prevData = state.selectedOppurtunities
            if (checked) {
                return { selectedOppurtunities: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevOppurtunities) => row.id === prevOppurtunities.id)
                ) {
                    return {
                        selectedOppurtunities: prevData.filter(
                            (prevOppurtunities) => prevOppurtunities.id !== row.id,
                        ),
                    }
                }
                return { selectedOppurtunities: prevData }
            }
        }),
    setSelectAllOppurtunities: (row) => set(() => ({ selectedOppurtunities: row })),
}))
