import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Sample, Filter } from '../types'

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

export type SampleListState = {
    tableData: TableQueries
    filterData: Filter
    selectedSample: Partial<Sample>[]
}

type SampleListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedSample: (checked: boolean, sample: Sample) => void
    setSelectAllSample: (sample: Sample[]) => void
}

const initialState: SampleListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedSample: [],
}

export const useSampleListStore = create<
    SampleListState & SampleListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedSample: (checked, row) =>
        set((state) => {
            const prevData = state.selectedSample
            if (checked) {
                return { selectedSample: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevSample) => row.id === prevSample.id)
                ) {
                    return {
                        selectedSample: prevData.filter(
                            (prevSample) => prevSample.id !== row.id,
                        ),
                    }
                }
                return { selectedSample: prevData }
            }
        }),
    setSelectAllSample: (row) => set(() => ({ selectedSample: row })),
}))
