import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { NewProduct } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type NewProductListState = {
  tableData: TableQueries
  selectedNewProduct: Partial<NewProduct>[]
}

type NewProductListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedNewProduct: (checked: boolean, newproduct: NewProduct) => void
  setSelectAllNewProduct: (newproduct: NewProduct[]) => void
}

const initialState: NewProductListState = {
  tableData: initialTableData,
  selectedNewProduct: [],
}

export const useNewProductListStore = create<
  NewProductListState & NewProductListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedNewProduct: (checked, row) =>
    set((state) => {
      const prevData = state.selectedNewProduct
      if (checked) {
        return { selectedNewProduct: [...prevData, ...[row]] }
      } else {
        if (
          prevData.some((prevNewProduct) => row.name === prevNewProduct.name)
        ) {
          return {
            selectedNewProduct: prevData.filter(
              (prevNewProduct) => prevNewProduct.name !== row.name,
            ),
          }
        }
        return { selectedNewProduct: prevData }
      }
    }),
  setSelectAllNewProduct: (row) => set(() => ({ selectedNewProduct: row })),
}))
