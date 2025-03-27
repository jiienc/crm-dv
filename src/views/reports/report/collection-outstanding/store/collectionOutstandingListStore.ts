import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CollectionOutstanding } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type CollectionOutstandingListState = {
  tableData: TableQueries
  selectedCollectionOutstanding: Partial<CollectionOutstanding>[]
}

type CollectionOutstandingListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedCollectionOutstanding: (checked: boolean, CollectionOutstanding: CollectionOutstanding) => void
  setSelectAllCollectionOutstanding: (CollectionOutstanding: CollectionOutstanding[]) => void
}

const initialState: CollectionOutstandingListState = {
  tableData: initialTableData,
  selectedCollectionOutstanding: [],
}

export const useCollectionOutstandingListStore = create<
  CollectionOutstandingListState & CollectionOutstandingListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedCollectionOutstanding: (checked, row) =>
    set((state) => {
      const prevData = state.selectedCollectionOutstanding
      if (checked) {
        return { selectedCollectionOutstanding: [...prevData, ...[row]] }
      } else {
        if (
          prevData.some((prevCollectionOutstanding) => row.name === prevCollectionOutstanding.name)
        ) {
          return {
            selectedCollectionOutstanding: prevData.filter(
              (prevCollectionOutstanding) => prevCollectionOutstanding.name !== row.name,
            ),
          }
        }
        return { selectedCollectionOutstanding: prevData }
      }
    }),
  setSelectAllCollectionOutstanding: (row) => set(() => ({ selectedCollectionOutstanding: row })),
}))
