import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { AuditTrail } from '../types'

export const initialTableData: TableQueries = {
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export type AuditTrailListState = {
    tableData: TableQueries
    selectedAuditTrail: Partial<AuditTrail>[]
}

type AuditTrailListAction = {
    setTableData: (payload: TableQueries) => void
    setSelectedAuditTrail: (checked: boolean, audittrail: AuditTrail) => void
    setSelectAllAuditTrail: (audittrail: AuditTrail[]) => void
}

const initialState: AuditTrailListState = {
    tableData: initialTableData,
    selectedAuditTrail: [],
}

export const useAuditTrailListStore = create<
    AuditTrailListState & AuditTrailListAction
>((set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedAuditTrail: (checked, row) =>
        set((state) => {
            const prevData = state.selectedAuditTrail
            if (checked) {
                return { selectedAuditTrail: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevAuditTrail) => row.name === prevAuditTrail.name)
                ) {
                    return {
                        selectedAuditTrail: prevData.filter(
                            (prevAuditTrail) => prevAuditTrail.name !== row.name,
                        ),
                    }
                }
                return { selectedAuditTrail: prevData }
            }
        }),
    setSelectAllAuditTrail: (row) => set(() => ({ selectedAuditTrail: row })),
}))
