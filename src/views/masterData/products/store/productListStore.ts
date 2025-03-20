import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Product } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type ProductsListState = {
  tableData: TableQueries
  selectedProduct: Partial<Product>[]
}

type ProductsListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedProduct: (checked: boolean, product: Product) => void
  setSelectAllProduct: (product: Product[]) => void
}

const initialState: ProductsListState = {
  tableData: initialTableData,
  selectedProduct: [],
}

export const useProductListStore = create<
  ProductsListState & ProductsListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedProduct: (checked, row) =>
    set((state) => {
      const prevData = state.selectedProduct
      if (checked) {
        return { selectedProduct: [...prevData, ...[row]] }
      } else {
        if (prevData.some((prevProduct) => row.name === prevProduct.name)) {
          return {
            selectedProduct: prevData.filter(
              (prevProduct) => prevProduct.name !== row.name,
            ),
          }
        }
        return { selectedProduct: prevData }
      }
    }),
  setSelectAllProduct: (row) => set(() => ({ selectedProduct: row })),
}))
