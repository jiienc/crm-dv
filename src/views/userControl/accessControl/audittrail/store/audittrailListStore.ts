import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { AuditTrail, Filter } from '../types'

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

export type AuditTrailListState = {
    tableData: TableQueries
    filterData: Filter
    selectedAuditTrail: Partial<AuditTrail>[]
}

type AuditTrailListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedAuditTrail: (checked: boolean, audittrail: AuditTrail) => void
    setSelectAllAuditTrail: (audittrail: AuditTrail[]) => void
}

const initialState: AuditTrailListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedAuditTrail: [],
}

export const useAuditTrailListStore = create<
    AuditTrailListState & AuditTrailListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedAuditTrail: (checked, row) =>
        set((state) => {
            const prevData = state.selectedAuditTrail
            if (checked) {
                return { selectedAuditTrail: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevAuditTrail) => row.id === prevAuditTrail.id)
                ) {
                    return {
                        selectedAuditTrail: prevData.filter(
                            (prevAuditTrail) => prevAuditTrail.id !== row.id,
                        ),
                    }
                }
                return { selectedAuditTrail: prevData }
            }
        }),
    setSelectAllAuditTrail: (row) => set(() => ({ selectedAuditTrail: row })),
}))
