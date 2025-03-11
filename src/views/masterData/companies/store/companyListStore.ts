import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Company, Filter } from '../types'

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

export type CompaniesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCompany: Partial<Company>[]
}

type CompaniesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCompany: (checked: boolean, company: Company) => void
    setSelectAllCompany: (company: Company[]) => void
}

const initialState: CompaniesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCompany: [],
}

export const useCompanyListStore = create<
    CompaniesListState & CompaniesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCompany: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCompany
            if (checked) {
                return { selectedCompany: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCompany) => row.id === prevCompany.id)
                ) {
                    return {
                        selectedCompany: prevData.filter(
                            (prevCompany) => prevCompany.id !== row.id,
                        ),
                    }
                }
                return { selectedCompany: prevData }
            }
        }),
    setSelectAllCompany: (row) => set(() => ({ selectedCompany: row })),
}))
