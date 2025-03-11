import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Users, Filter } from '../types'

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

export type UsersListState = {
    tableData: TableQueries
    filterData: Filter
    selectedUsers: Partial<Users>[]
}

type UsersListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedUsers: (checked: boolean, users: Users) => void
    setSelectAllUsers: (users: Users[]) => void
}

const initialState: UsersListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedUsers: [],
}

export const useUsersListStore = create<
    UsersListState & UsersListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedUsers: (checked, row) =>
        set((state) => {
            const prevData = state.selectedUsers
            if (checked) {
                return { selectedUsers: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevUsers) => row.id === prevUsers.id)
                ) {
                    return {
                        selectedUsers: prevData.filter(
                            (prevUsers) => prevUsers.id !== row.id,
                        ),
                    }
                }
                return { selectedUsers: prevData }
            }
        }),
    setSelectAllUsers: (row) => set(() => ({ selectedUsers: row })),
}))
