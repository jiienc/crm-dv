import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { NewProduct, Filter } from '../types'

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

export type NewProductListState = {
    tableData: TableQueries
    filterData: Filter
    selectedNewProduct: Partial<NewProduct>[]
}

type NewProductListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedNewProduct: (checked: boolean, newproduct: NewProduct) => void
    setSelectAllNewProduct: (newproduct: NewProduct[]) => void
}

const initialState: NewProductListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedNewProduct: [],
}

export const useNewProductListStore = create<
    NewProductListState & NewProductListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedNewProduct: (checked, row) =>
        set((state) => {
            const prevData = state.selectedNewProduct
            if (checked) {
                return { selectedNewProduct: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevNewProduct) => row.id === prevNewProduct.id)
                ) {
                    return {
                        selectedNewProduct: prevData.filter(
                            (prevNewProduct) => prevNewProduct.id !== row.id,
                        ),
                    }
                }
                return { selectedNewProduct: prevData }
            }
        }),
    setSelectAllNewProduct: (row) => set(() => ({ selectedNewProduct: row })),
}))
