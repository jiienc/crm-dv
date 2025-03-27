import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Users } from '../types'

export const initialTableData: TableQueries = {
  pageIndex: 1,
  pageSize: 10,
  query: '',
  sort: {
    order: '',
    key: '',
  },
}

export type UsersListState = {
  tableData: TableQueries
  selectedUsers: Partial<Users>[]
}

type UsersListAction = {
  setTableData: (payload: TableQueries) => void
  setSelectedUsers: (checked: boolean, users: Users) => void
  setSelectAllUsers: (users: Users[]) => void
}

const initialState: UsersListState = {
  tableData: initialTableData,
  selectedUsers: [],
}

export const useUsersListStore = create<UsersListState & UsersListAction>(
  (set) => ({
    ...initialState,
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedUsers: (checked, row) =>
      set((state) => {
        const prevData = state.selectedUsers
        if (checked) {
          return { selectedUsers: [...prevData, ...[row]] }
        } else {
          if (prevData.some((prevUsers) => row.name === prevUsers.name)) {
            return {
              selectedUsers: prevData.filter(
                (prevUsers) => prevUsers.name !== row.name,
              ),
            }
          }
          return { selectedUsers: prevData }
        }
      }),
    setSelectAllUsers: (row) => set(() => ({ selectedUsers: row })),
  }),
)
