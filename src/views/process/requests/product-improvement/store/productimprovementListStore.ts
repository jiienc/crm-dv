import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ProductImprovement } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type ProductImprovementListState = {
  tableData: TableQueries
  selectedProductImprovement: Partial<ProductImprovement>[]
}

type ProductImprovementListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedProductImprovement: (
    checked: boolean,
    productimprovement: ProductImprovement,
  ) => void
  setSelectAllProductImprovement: (
    productimprovement: ProductImprovement[],
  ) => void
}

const initialState: ProductImprovementListState = {
  tableData: initialTableData,
  selectedProductImprovement: [],
}

export const useProductImprovementListStore = create<
  ProductImprovementListState & ProductImprovementListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedProductImprovement: (checked, row) =>
    set((state) => {
      const prevData = state.selectedProductImprovement
      if (checked) {
        return { selectedProductImprovement: [...prevData, ...[row]] }
      } else {
        if (
          prevData.some(
            (prevProductImprovement) =>
              row.name === prevProductImprovement.name,
          )
        ) {
          return {
            selectedProductImprovement: prevData.filter(
              (prevProductImprovement) =>
                prevProductImprovement.name !== row.name,
            ),
          }
        }
        return { selectedProductImprovement: prevData }
      }
    }),
  setSelectAllProductImprovement: (row) =>
    set(() => ({ selectedProductImprovement: row })),
}))
