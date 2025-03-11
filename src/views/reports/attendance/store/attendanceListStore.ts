import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Attendance, Filter } from '../types'

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

export type AttendanceListState = {
    tableData: TableQueries
    filterData: Filter
    selectedAttendance: Partial<Attendance>[]
}

type AttendanceListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedAttendance: (checked: boolean, attendance: Attendance) => void
    setSelectAllAttendance: (attendance: Attendance[]) => void
}

const initialState: AttendanceListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedAttendance: [],
}

export const useAttendanceListStore = create<
    AttendanceListState & AttendanceListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedAttendance: (checked, row) =>
        set((state) => {
            const prevData = state.selectedAttendance
            if (checked) {
                return { selectedAttendance: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevAttendance) => row.id === prevAttendance.id)
                ) {
                    return {
                        selectedAttendance: prevData.filter(
                            (prevAttendance) => prevAttendance.id !== row.id,
                        ),
                    }
                }
                return { selectedAttendance: prevData }
            }
        }),
    setSelectAllAttendance: (row) => set(() => ({ selectedAttendance: row })),
}))
