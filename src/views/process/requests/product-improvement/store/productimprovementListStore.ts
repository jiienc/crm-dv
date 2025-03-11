import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ProductImprovement, Filter } from '../types'

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

export type ProductImprovementListState = {
    tableData: TableQueries
    filterData: Filter
    selectedProductImprovement: Partial<ProductImprovement>[]
}

type ProductImprovementListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedProductImprovement: (checked: boolean, productimprovement: ProductImprovement) => void
    setSelectAllProductImprovement: (productimprovement: ProductImprovement[]) => void
}

const initialState: ProductImprovementListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedProductImprovement: [],
}

export const useProductImprovementListStore = create<
    ProductImprovementListState & ProductImprovementListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedProductImprovement: (checked, row) =>
        set((state) => {
            const prevData = state.selectedProductImprovement
            if (checked) {
                return { selectedProductImprovement: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevProductImprovement) => row.id === prevProductImprovement.id)
                ) {
                    return {
                        selectedProductImprovement: prevData.filter(
                            (prevProductImprovement) => prevProductImprovement.id !== row.id,
                        ),
                    }
                }
                return { selectedProductImprovement: prevData }
            }
        }),
    setSelectAllProductImprovement: (row) => set(() => ({ selectedProductImprovement: row })),
}))
