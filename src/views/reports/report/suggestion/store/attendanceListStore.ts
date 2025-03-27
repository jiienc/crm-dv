import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Attendance } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type AttendanceListState = {
  tableData: TableQueries
  selectedAttendance: Partial<Attendance>[]
}

type AttendanceListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedAttendance: (checked: boolean, attendance: Attendance) => void
  setSelectAllAttendance: (attendance: Attendance[]) => void
}

const initialState: AttendanceListState = {
  tableData: initialTableData,
  selectedAttendance: [],
}

export const useAttendanceListStore = create<
  AttendanceListState & AttendanceListAction
>((set) => ({
  ...initialState,
  setTableData: (payload) => set(() => ({ tableData: payload })),
  setSelectedAttendance: (checked, row) =>
    set((state) => {
      const prevData = state.selectedAttendance
      if (checked) {
        return { selectedAttendance: [...prevData, ...[row]] }
      } else {
        if (
          prevData.some((prevAttendance) => row.name === prevAttendance.name)
        ) {
          return {
            selectedAttendance: prevData.filter(
              (prevAttendance) => prevAttendance.name !== row.name,
            ),
          }
        }
        return { selectedAttendance: prevData }
      }
    }),
  setSelectAllAttendance: (row) => set(() => ({ selectedAttendance: row })),
}))
