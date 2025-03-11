import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Returnn, Filter } from '../types'

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

export type ReturnnListState = {
    tableData: TableQueries
    filterData: Filter
    selectedReturnn: Partial<Returnn>[]
}

type ReturnnListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedReturnn: (checked: boolean, returnn: Returnn) => void
    setSelectAllReturnn: (returnn: Returnn[]) => void
}

const initialState: ReturnnListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedReturnn: [],
}

export const useReturnnListStore = create<
    ReturnnListState & ReturnnListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedReturnn: (checked, row) =>
        set((state) => {
            const prevData = state.selectedReturnn
            if (checked) {
                return { selectedReturnn: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevReturnn) => row.id === prevReturnn.id)
                ) {
                    return {
                        selectedReturnn: prevData.filter(
                            (prevReturnn) => prevReturnn.id !== row.id,
                        ),
                    }
                }
                return { selectedReturnn: prevData }
            }
        }),
    setSelectAllReturnn: (row) => set(() => ({ selectedReturnn: row })),
}))
