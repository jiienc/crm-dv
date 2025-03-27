import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Sample } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type SampleListState = {
  tableData: TableQueries
  selectedSample: Partial<Sample>[]
}

type SampleListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedSample: (checked: boolean, sample: Sample) => void
  setSelectAllSample: (sample: Sample[]) => void
}

const initialState: SampleListState = {
  tableData: initialTableData,
  selectedSample: [],
}

export const useSampleListStore = create<SampleListState & SampleListAction>(
  (set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedSample: (checked, row) =>
      set((state) => {
        const prevData = state.selectedSample
        if (checked) {
          return { selectedSample: [...prevData, ...[row]] }
        } else {
          if (prevData.some((prevSample) => row.name === prevSample.name)) {
            return {
              selectedSample: prevData.filter(
                (prevSample) => prevSample.name !== row.name,
              ),
            }
          }
          return { selectedSample: prevData }
        }
      }),
    setSelectAllSample: (row) => set(() => ({ selectedSample: row })),
  }),
)
